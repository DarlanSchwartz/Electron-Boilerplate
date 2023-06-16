import React from "react";
import styled from 'styled-components';

export default function App()
{
    return(
        <TestDiv>
            <h1>Electron App</h1>
            <button onClick={()=> alert('This is a notification')}>Notification</button>
        </TestDiv>
    );
}

const TestDiv = styled.div`

h1{
    color: white;
}
`;