import React from 'react';
import {Space} from "../../components/01-space/Space";
import {Board} from "../../components/02-board/Board";
import {Task} from "../../components/03-task/Task";

export const TaskBoard: React.FC = () => {

    return (
        <div>
            <div>TaskBoard</div>
            <Space/>
            <Board/>
            <Task/>
        </div>
    )
}