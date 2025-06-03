import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';
import realEstate from '/public/image/real-estate.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Potato Disease Classification',
        description: "Developed a Potato Disease Classification system using CNN and TensorFlow to detect leaf diseases,🌿 Deployed with a React Native frontend and Google Cloud Functions for real-time predictions, 💡 A step toward smarter, AI-powered agriculture.",
        tools: ['Convolutional Neural Networks (CNN)', 'Natural Language Processing (NLP)', ' React Native', 'Fast Api'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'iste_chat_app',
        description: '💬 Introducing iste_chat_app – a real-time chat application built with Flutter, Dart, and Firebase, 📱 Features include user authentication, real-time messaging, and cloud data storage.🔥Powered by Firebase for backend services like Firestore and Auth.🚀 Built to enhance my skills in full-stack mobile development.',
        tools: ['Flutter ', "Firebase", "Dart", "Gmail Passkey", ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'News Summarizer App',
        description: '📰 Just launched my News Summarizer App – a tool that delivers concise summaries of lengthy news articles in seconds!💡Built with Python and NLP techniques to extract key points and improve news readability.🚀 Simple, fast, and ideal for staying informed without information overload.',
        tools: ['Natural Language Processing (NLP)', '  Python (Programming Language) ', 'BERT (Language Model)', 'T5 (Language Model)', 'Streamlit'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
     {
         id: 4,
         name: 'Library Management System',
         description: "Developed a Library Management System with features like book addition, deletion, and updating. 🖥️ Built using C# and SQL, it simplifies managing books, members, and borrow/return processes. 💡 A practical desktop solution for efficient library operations.",
        tools: ['C# ', 'SQL'],
        code: '',
        demo: '',
        role: 'Full Stack Developer'
    },
    {
         id: 5,
         name: 'Fitness Center Automation System ',
         description: "💪 Proud to share our Fitness Center Automation System – a desktop app designed to streamline gym management tasks. 🖥️ Built using C# and SQL Server, it manages memberships, payments, trainers, and schedules efficiently. 🔐 Includes role-based access control for admins, trainers, and users. 🤝A team project developed at İskenderun Technical University.",
        tools: ['C# ', 'SQL Server', "Calendar"],
        code: '',
        demo: '',
        role: 'Full Stack Developer'
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },