
export const samepleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "raju bhai",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],

    },

    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"
        ],
        name: "rahul singh",

        _id: "2",
        groupChat: true,
        members: ["1", "2"],

    },

];


export const sampleUsers = [
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "raju bhai",
        _id: "1",

    },

    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "rahul singh",
        _id: "2",

    },
];


export const sampleNotifications = [
    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "raju bhai",
        },
        _id: "1",

    },

    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "rahul singh",
        },
        _id: "2",

    },
]




export const sampleMessage = [
    {
        attachments: [],
        content: "hello how are you broo",
        _id: "qkvhoquilknewjee",
        sender: {
            _id: "user._id",
            name: "chacha",

        },
        chat: "chatId",
        createdAt: "2024-03-11T08:25:39Z",
    },

    {
        attachments: [
            {
                public_id: "deepika",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },

        ],
        content: "",
        _id: "qkvhoquiravilknewjee",
        sender: {
            _id: "nvwhkbod",
            name: "raju",

        },
        chat: "chatId",
        createdAt: "2024-03-11T08:25:39Z",
    },



];


export const dashboardData = {
    users: [
        {
            name: "nola",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "nola_parker",
            friends: 20,
            groups: 5,
        },
        {
            name: "tinna",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "tinna",
            friends: 20,
            groups: 25,
        },
    ],

    chats: [
        {
            name: "gandu group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [
                {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "gandu",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            name: "bhadva Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members: [
                {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},
                {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}], 
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "bhadva",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],

    messages:[
        {
        attachments: [],
        content: "hello how are you broo",
        _id: "qkvhoquilknewjee",
        sender: {
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name: "chacha",

        },
        chat: "chatId",
        groupChat:false,
        createdAt: "2024-03-11T08:25:39Z",
    },

    {
        attachments: [
            {
                public_id: "deepika",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },

        ],
        content: "",
        _id: "qkvhoquiravilknewjee",
        sender: {
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            name: "raju",

        },
        chat: "chatId",
        groupChat:true,
        createdAt: "2024-03-11T08:25:39Z",
    },


    ]
}