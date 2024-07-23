import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const Events = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();

    const getCurrentDateString = () => {
        const currentDay = currentDate.getDate();
        const currentDayOfWeek = days[currentDate.getDay()]; // Get current day of the week

        return `${months[currentMonth]} ${currentDay}, ${currentDayOfWeek}`;
    };

    const getDayTextColor = (day) => {
        if (day === 1 || day === 15 || day === 28) {
            return 'text-[#E65F2B]';
        } else if (day === 5 || day === 20) {
            return 'text-[#E65F2B]';
        } else {
            return 'text-[#0098F1]';
        }
    };

    const renderDays = () => {
        let daysArray = [];

        // Render empty cells for days before the start of the current month
        for (let i = 0; i < startDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
        }

        // Render actual days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayTextColor = getDayTextColor(i);
            const isToday =
                i === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear();
            const dayClasses = `day text-center text-xl ${dayTextColor} ${
                isToday ? 'bg-[#FDE68A] rounded-full' : ''
            }`;

            daysArray.push(
                <div key={i} className={dayClasses} style={{ margin: '4px' }}>
                    <span className="font-roboto font-medium">{i}</span>
                </div>
            );
        }

        return daysArray;
    };

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="mt-24 pl-4 h-screen">
        
            <div className="ml-5">
          <p className="text-[#e65f2b] font-bold text-lg">Events</p>
        </div>
            <div className="flex justify-end mb-4">
                <button className="bg-[#0098F1] text-white flex items-center rounded-lg px-6 py-3">
                    <FaPlusCircle className="text-white text-3xl mr-2" />
                    <span className="text-white font-medium text-lg">Add New User</span>
                </button>
            </div>

            <div className="flex md:flex-row flex-col gap-48">
                <div className="w-full bg-white rounded-lg p-4 ">
                    <div className="w-[150%] mx-auto rounded-lg overflow-hidden p-4 border">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="font-medium text-2xl text-[#E65F2B] mb-10">{getCurrentDateString()}</h2>
                            <div className="mt-10">
                                <button
                                    className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent mr-3"
                                    onClick={goToPreviousMonth}
                                    style={{ width: '28px', height: '28px', padding: '4px', borderWidth: '2px' }}
                                >
                                    <GoChevronLeft style={{ fontSize: '15px' }} />
                                </button>
                                <button
                                    className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent"
                                    onClick={goToNextMonth}
                                    style={{ width: '28px', height: '28px', padding: '4px', borderWidth: '2px' }}
                                >
                                    <GoChevronRight style={{ fontSize: '15px' }} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-4">
                            {days.map(day => (
                                <div key={day} className="text-center text-xl text-black font-roboto font-[600]">{day}</div>
                            ))}
                            {renderDays()}
                        </div>
                    </div>
                </div>

                <div className=" w-full bg-[#0098F1] rounded-lg p-4 border borde-black" >
                    <div className="flex flex-col items-center justify-center">
                        <div className="rounded-full overflow-hidden flex items-center justify-center">
                            <img
                                className="rounded-full h-24 w-24 object-cover"
                                src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                                alt="User"
                            />
                        </div>
                        <h1 className="text-white text-2xl  mb-1 text-center mt-1">Mounika</h1>

                        <div className="flex flex-row space-x-4 text-white">
                            <div className="font-roboto text-center pl-3 pr-3">
                                <p className="font-medium">17</p>
                                <p>Completed</p>
                            </div>
                            <div className="font-roboto text-center pl-3 pr-3">
                                <h1 className="font-medium">34</h1>
                                <h1>To Do</h1>
                            </div>
                            <div className="font-roboto text-center pl-3 pr-3">
                                <h1 className="font-medium">78</h1>
                                <h1>All Tasks</h1>
                            </div>
                        </div>

                        <hr className="w-full border-white my-4" style={{ opacity: '0.5' }} />

                        <div className="grid grid-cols-2 gap-2 mb-2">
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Marketing</h1>
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Design Task</h1>
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Development</h1>
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Finance</h1>
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Meeting</h1>
                            <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">Conference</h1>
                        </div>

                    </div>

                    <hr className="w-full border-white my-1" style={{ opacity: '0.5' }} />
                    <div className="font-roboto text-xl">
                        <h1 className="text-white">Team</h1>
                        <div className="flex items-center ml-4">
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index}
                                    src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                                    alt={`Image ${index + 1}`}
                                    className={`w-8 h-8 rounded-full -ml-3 z-${5 - index}`}
                                    style={{ zIndex: 5 - index }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
