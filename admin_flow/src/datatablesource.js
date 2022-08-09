export const userCols = [
    { field: 'id', headerName: 'ID', width: 70 },
    { feild: "user", headerName: "User", width: 230, cellRender: (params) => {
        return(
            <div className="cellwithimg">
                <img className="cellimg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
        }
    },

    {   
        feild: "email",
        headerName: "Email",
        width: 230
    },

    {   
        feild: "age",
        headerName: "Age",
        width: 100
    },

    {   
        feild: "status",
        headerName: "Status",
        width: 160,
        cellRender: (params) => {
            return (
                <div className="cellwithstatus">{params.row.status}</div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com", 
        age: 35
    },

    {
        id: 2,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 3,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 4,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 5,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },
    
    {
        id: 6,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 7,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 8,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 9,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },

    {
        id: 10,
        username: "Jhon Snow",
        image:"C:/Users/babyt/Pictures/ACM_ppt/final.png",
        status: "active",
        email: "lifeismeaningless@gmail.com",
        age: 35
    },
]