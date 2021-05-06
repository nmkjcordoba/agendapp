import { Fragment } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";
import  Select  from "react-select";
import DatePicker from "react-date-picker";
import { useForm, Controller } from "react-hook-form";
import { LabelError, Textarea } from "./styles";
import { FormGroup } from "../../globalStyles";

const USER = [
    {value: 1, label: 'Juan'},
    {value: 2, label: 'Luis'},
    {value: 3, label: 'Maria'},
    {value: 4, label: 'Jose'},
    {value: 5, label: 'Baltasar'},
    {value: 6, label: 'Gaspar'}
]

export const CreateTask = ({title}) => {

    const { register, control, handleSubmit, formState: { errors,isValid } } = useForm({mode: 'onChange'});

    const onSubmitCreate = (data) =>{
        console.log("form data", data)
    }

    return(
        <Fragment>
            <Topbar title={title} />
            <form onSubmit={handleSubmit(onSubmitCreate)} >
                <FormGroup>
                    <label>Task title</label>
                    <Input 
                        register={register} 
                        name="taskTitle" 
                        rules={{required:true, minLength:6}} 
                        label="Task title" 
                        type="text" 
                        placeholder="Enter task title" 
                    />
                    {   errors.taskTitle?.type === "required" && <LabelError>Field required</LabelError> }
                    {   errors.taskTitle?.type === "minLength" && <LabelError>Min Length 6 characters</LabelError> }
                </FormGroup>
                                
                <FormGroup>
                    <label>Responsible</label>
                    <Controller 
                        name="responsible" 
                        control={control}
                        rules={{required:true}}
                        render={ ({field}) => <Select {...field} options={USER} placeholder="Responsible" /> } 
                    />
                    {
                        errors.responsible && <LabelError>field required</LabelError>
                    }
                </FormGroup>
                <FormGroup>
                    <label>Collaborators</label>
                    <Controller 
                        name="colaborators"
                        control={control}
                        rules={{required:true}}
                        render={ ({field} ) => <Select {...field} isMulti placeholder="Select collaborators" options = {USER} /> }
                    />
                    {
                        errors.colaborators && <LabelError>field required</LabelError>
                    }
                </FormGroup>
                <FormGroup>
                    <label>Due Date</label>
                    <div>
                        <Controller 
                        name="dueDateTask"
                        control={control}
                        rules={{required:true}}
                        defaultValue={new Date()}
                        render={ ({field} ) => <DatePicker {...field} locale="en-EN" format="dd-MM-yy"  /> }
                        />
                        {
                            errors.dueDateTask && <LabelError>field required</LabelError>
                        }
                    </div>
                </FormGroup>
                <FormGroup>
                    <label>Description</label>
                    <Textarea 
                        {...register("description", {required:true} ) } 
                        rows="3" 
                        errors={ errors.description}
                    />
                </FormGroup>
                {
                        errors.description && <LabelError>field required</LabelError>
                    }
                <div>
                    <Button disabled={!isValid} type="submit" text="create" />
                </div>
            </form>
        </Fragment>
    )
}
