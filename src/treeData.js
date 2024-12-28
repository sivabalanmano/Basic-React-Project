import { Children } from "react";


export const sideMenu = [
    {
        lable:"Home",
        to:"/",
    },
    {
        lable:"Profile",
        to:"/profile",
        Children:[
            {
                lable:"Details",
                to:"details",
                Children:[
                    {
                        lable:"Location",
                        to:"location",
                        Children:[
                            {
                                lable:"City",
                                to:"city"
                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
        lable:"Settings",
        to:"/settings",
    },
    {
        lable:"Accound",
        to:"/accound",
        Children:[
            {
                lable:"Security",
                to:"security",
                Children:[
                    {
                        lable:"Login",
                        to:"login",
                    },
                    {
                        lable:"Register",
                        to:"register",
                    }
                ],
            },
        ],
    },
]

export default sideMenu;