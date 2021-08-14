import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";

const theme = {
    background: "#F4F5F6",
    fontFamily: "sans-serif",
    headerBgColor: "#15bea9",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#65b1ff",
    botFontColor: "#fff",
    userBubbleColor: "#59dd64",
    userFontColor: "#fff",
};

const steps = [
    {
        id: "1",
        message: "Hey! I am Space-bot, how are you feeling today",
        trigger: "expressions",
    },
    {
        id: "expressions",
        options: [
            { value: "veryHappy", label: "😀", trigger: "veryHappy" },
            { value: "happy", label: "🙂", trigger: "happy" },
            { value: "normal", label: "😐", trigger: "normal" },
            { value: "sad", label: "☹️", trigger: "sad" },
            { value: "angry", label: "😡", trigger: "angry" },
        ],
    },
    {
        id: "veryHappy",
        message: "Great Me too 😍",
        trigger: "help",
    },
    {
        id: "happy",
        message:
            "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
        trigger: "help",
    },
    {
        id: "normal",
        message:
            "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You 👻",
        trigger: "help",
    },
    {
        id: "sad",
        message:
            "I am sorry to here that 😟 . Well i would suggest to read our random Fun-fact or Visit our Yoga Services or Read the latest feeds. You will feel better.🙂",
        trigger: "help",
    },
    {
        id: "angry",
        message:
            "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies  and eat a lot of healthy tasty food just like me..😝",
        trigger: "help",
    },
    {
        id: "help",
        message: "How can I help you?",
        trigger: "options",
    },
    {
        id: "options",
        options: [
            { value: "services", label: "Services", trigger: "services" },
            { value: "exit", label: "Exit", trigger: "end" },
        ],
    },
    {
        id: "services",
        message: "select one of these services",
        trigger: "selectServices",
    },
    {
        id: "selectServices",
        options: [
            { value: "Class", label: "Class", trigger: "selectedService" },
            { value: "goBack", label: "go back", trigger: "options" },
        ],
    },
    {
        id: "selectedService",
        message: "opened {previousValue}",
        trigger: "end",
    },
    {
        id: "moreHelp",
        message: "do you meed more help?",
        trigger: "moreHelp-yes",
    },
    {
        id: "moreHelp-yes",
        options: [
            { value: "yes", label: "Yes", trigger: "help" },
            { value: "no", label: "No", trigger: "end" },
        ],
    },
    {
        id: "end",
        message: "Thank you, see you again!",
        end: true,
    },
];


function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const history = useHistory();

    const handleEnd = ({ steps, values }) => {
        switch (values[values.length - 1]) {
            case "home":
                history.push("/");
                break;
            case "Class":
                history.push("/classes");
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle="Space Bot"
                    botAvatar={"https://cdn.imgbin.com/7/4/22/imgbin-space-suit-astronaut-outer-space-drawing-astronaut-tqnbVky6vcbJwUxptkc47J3DR.jpg"}
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <img
                            src={"https://cdn.imgbin.com/7/4/22/imgbin-space-suit-astronaut-outer-space-drawing-astronaut-tqnbVky6vcbJwUxptkc47J3DR.jpg"}
                            style={{ width: "70%" }}
                            alt="chatBot icon"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
