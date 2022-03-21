import { useHistory } from 'react-router-dom'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    const history = useHistory()

    function createPost(project){
        // initialize cost and service
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            Headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {console.log(data)
            //redirect
            history.push('/projects', {message: 'projeto criado com sucesso' })
        })
        .catch((err) => console.log(err))
    }

    

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handlerSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject