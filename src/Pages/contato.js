import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'http://localhost:3000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(async function () {
        const response = await fetch(url);
        const data = await response.json();
        setMessage(data);
        }, [render]);
        
        const sendMessage = () => {
            setValidator(false);
            if (author.lenght <= 0 || content.lenght <= 0) {
                return setValidator(!validator)
            }
            const bodyForm = {
                email: author,
                message: content,
            }

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyForm)
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.id) {
                        setRender(true);
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 5000)
                    }
                })
        
            setAuthor('');
            setContent('');
        
            console.log(content)
        }
    
    return (
            <>
                <Grid container direction="row" xs={12}>
                    <TextField id="name" label="Name" value={author} onChange={(event) => { setAuthor(event.target.value) }} fullWidth />
                    <TextField id="message" label="Message" value={content} onChange={(event) => { setContent(event.target.value) }} fullWidth />
                </Grid>

                {validator &&
                    <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                        <strong>Por favor preencha todos os campos!</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
        
                {success &&
                    <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                        <strong>Sua mensagem foi enviada com sucesso!</strong>
                    </div>
                }

                <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary">
                    Sent
                </Button>

                {message.map((content) => {
                    return (
                        <div className="card mt-2 col-md-6" key={content.id}>
                            <div className="card-body">
                                <h5 className="card-title">{content.email}</h5>
                                <p className="card-text">{content.message}</p>
                                <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                            </div>
                        </div>
                )
            } )}
        </>
    )
}
export default Contatos;