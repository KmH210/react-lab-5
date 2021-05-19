import {ReactNode, useState } from "react";


function StoryViewer({ story }: Props) {
    const { words, title } = story;
    const [template, setTemplate] = useState("A");

    let text: ReactNode;
    if (template === "A") {
        text = (
            <>
            <p>
                Yesterday, I went to the {" "}
                <em> 
                    <strong>{words[0]}</strong>
                </em>
                . I wanted to buy some {" "}
                <em>
                    <strong>{words[1]}</strong>
                </em>
            </p>
            <p>
                but I didn't buy anything because the store was {" "}
                <em>
                    <strong>{words[2]}</strong>
                </em>{" "}
                so I went {" "}
                <em>
                    <strong>{words[3]}</strong>
                </em>
            </p>
        </>
        );
    }
} else if (template === "B"){

}