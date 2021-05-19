import { createContext, ReactNode, useState } from "react";
import examples from "../model/examples";
import  Story  from "../model/Story";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

interface StoryContextValue {
    stories: Story[];
    addStory: (story: Story) => number;
};

const defaultValue: StoryContextValue = {
    stories: [],
    addStory: () => 0,
}

const moreExamples: Story[] = [
    {title: "title", words: ["word1", "word2"]},
    {title: "title", words: ["word1", "word2"]},
]
export const StoryContext = createContext(defaultValue);

export function StoryContextProvider({children}: {children: ReactNode}) {
    const [stories, setStories] = useState<Story[]>(moreExamples);

    function addStory(story: Story):number {
        setStories([...stories, story]);
        return stories.length;
    }
    return (
        <StoryContext.Provider value={{ stories, addStory}}>
            {children}
        </StoryContext.Provider>
    );
}