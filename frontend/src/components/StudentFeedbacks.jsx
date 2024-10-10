import React from 'react';

const feedbacks = [
  {
    id: 1,
    text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    title: "Designer",
  },
  {
    id: 2,
    text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    title: "Designer",
  },
  {
    id: 3,
    text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    title: "Designer",
  },
  {
    id: 4,
    text: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
    name: "Roe Smith",
    title: "Designer",
  },
];

const FeedbackSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Student Feedbacks</h2>
        <p className="text-gray-600">What Students Say About Academy LMS</p>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <p className="text-center italic text-gray-600 mb-4">"{feedback.text}"</p>
            <div className="text-center">
              <h3 className="font-semibold">{feedback.name}</h3>
              <p className="text-gray-500">{feedback.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-200 to-purple-300 p-8 rounded-lg text-center">
        <h3 className="text-lg font-semibold mb-4">Let's Start With Academy LMS</h3>
        <div className="flex justify-center space-x-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600">
            I'm A Student
          </button>
          <button className="bg-white border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white">
            Become An Instructor
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
