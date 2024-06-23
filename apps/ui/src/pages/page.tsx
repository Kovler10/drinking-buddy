import { useParams } from "react-router-dom"
import {Flex} from '@mantine/core';
import { Follow } from "./follow/follow";
import { Stats } from "./stats/stats";
import { Profile } from "./profile/profile";
import React from "react";
import { BottomNavigation } from "../components/bottom-navigation/bottom-navigation";

const pages: Record<string, React.ReactElement> = {
    follow: <Follow/>,
    stats: <Stats/>,
    profile: <Profile/>
}

const Page: React.FC = () => {
    const { tabValue } = useParams();
    
    return <Flex>{pages[tabValue ?? 'profile']}<BottomNavigation/></Flex>;
}

export {Page};