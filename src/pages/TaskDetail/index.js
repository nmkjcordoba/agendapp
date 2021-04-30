import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";
import { Topbar } from "../../components/Topbar";
import { getStatusById } from "../../constants/TaskStatus";
import { TaskDescription, TaskFooter, TaskDueDate, TaskResponsable, TaskStatusLabel, TaskTitle } from "./styles";

export const TaskDetail = ({title}) => {
  const { id } = useParams();
  const history = useHistory();

  const renderStatus = (id) => {
    const status = getStatusById(id);
    return <TaskStatusLabel color={status.color}>{status.name}</TaskStatusLabel>
  }

  const gobackApp = () => {
    history.goBack();
  }

  return (
    <Fragment>
      <Topbar isBackVisible={true} onPress={gobackApp} title={title} />
      { renderStatus(2) }
      <TaskTitle>Titulo {id}</TaskTitle>
      <TaskDescription>lorem.....</TaskDescription>
      <TaskFooter>
        <TaskDueDate>3 days left</TaskDueDate>
        <TaskResponsable>Juanito</TaskResponsable>
      </TaskFooter>
    </Fragment>
  );
};
