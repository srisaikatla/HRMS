pipeline {
    agent any

    tools {
        nodejs 'nodejs-18'
    }

    environment {
        DOCKER_IMAGE = 'spydtech/hrms-frontend'
        DOCKER_IMAGE_TAG = "v${env.BUILD_NUMBER}"
    }

    triggers {
        githubPush() // Trigger pipeline on GitHub push
    }

    stages {
        stage('Git Checkout') {
            steps {
                script {
                    git url: "${env.GIT_REPO_FRONTEND_URL}", branch: 'main'
                }
            }
        }
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar') {
                    sh """
                    sonar-scanner \
                    -Dsonar.projectKey=${env.SONAR_PROJECT_KEY} \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=${env.SONAR_SERVER_URL} \
                    -Dsonar.login=${env.SONAR_LOGIN_TOKEN}
                    """
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_IMAGE_TAG} ."
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub', variable: 'DOCKER_PASSWORD')]) {
                        sh """
                        echo $DOCKER_PASSWORD | docker login -u spydtech --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_IMAGE_TAG}
                        """
                    }
                }
            }
        }
        stage('Remove Old Docker Container') {
            steps {
                script {
                    sh """
                    docker stop hrms-frontend || true
                    docker rm hrms-frontend || true
                    docker rmi ${DOCKER_IMAGE}:previous || true
                    docker tag ${DOCKER_IMAGE}:${DOCKER_IMAGE_TAG} ${DOCKER_IMAGE}:previous
                    """
                }
            }
        }
        stage('Deploy New Docker Container') {
            steps {
                script {
                    sh """
                    docker run -d --name hrms-frontend -p 80:80 ${DOCKER_IMAGE}:${DOCKER_IMAGE_TAG}
                    """
                }
            }
        }
    }
    post {
        success {
            echo 'Build and Deployment successful!'
        }
        failure {
            echo 'Build or Deployment failed!'
        }
    }
}
