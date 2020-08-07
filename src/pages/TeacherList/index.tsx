import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'

function TeacherList(){
    
    const [subject, setSubject ] = useState('');
    const [week_day, setWeekDay ] = useState('');
    const [time, setTime ] = useState('');

    function searchTeachers(e: FormEvent){
        e.preventDefault();

        console.log
    }
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis." >
               <form id="search-teachers" onSubmit={searchTeachers} >
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            {value:'Artes', label: 'Artes'},
                            {value:'Biologia', label: 'Biologia'},
                            {value:'Ciencias', label: 'Ciencias'},
                            {value:'Ed. Fisica', label: 'Ed. Fisica'},
                            {value:'Geografia', label: 'Geografia'},
                            {value:'Matematica', label: 'Matematica'},
                            {value:'Português', label: 'Português'},
                            {value:'Quimica', label: 'Quimica'},
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={e => {setWeekDay(e.target.value)}}
                        options={[
                            {value:'0', label: 'Domingo'},
                            {value:'1', label: 'Segunda-feira'},
                            {value:'2', label: 'Terça-feira'},
                            {value:'3', label: 'Quarta-feira'},
                            {value:'4', label: 'Quinta-feira'},
                            {value:'5', label: 'Sexta-feira'},
                            {value:'6', label: 'Sabado'},
                        ]}
                    />
                   <Input 
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={e => {setTime(e.target.value);}}
                   />

                   <button type="submit">Buscar</button>
               </form>
           </PageHeader>
           
           <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
           </main>
        </div>
    );
}

export default TeacherList;