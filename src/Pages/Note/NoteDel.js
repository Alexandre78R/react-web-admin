//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert,
} from 'reactstrap';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent API Backend
import ApiBackend from '../../utils/ApiBackend.js';

//Import des fonctions
import fonction from '../../utils/Function.js'

class NoteDel extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        //State de la postion 
        position : props.position,
        //State du titre 
        title : props.title,
        props : props,
        //State du modal
        modalDel : false,
        //State Alert
        bgAlertModal: false,
        //State ProgressBar
        progressBar : false,
        //State Message
        textModal : "",
    };
  }
  
    handleSubmitDel = () => {
        // console.log("chargement du module delNote -->", test)
        console.log("Props des notes", this.state.props)
        this.setState({
            modalDel : true,
        })
    }

    //Fonction suppression de la note
    noteDel = () => {
        var ctx = this;

        //Changement des states surtout pour afficher la progresseBar.
        this.setState({
        bgAlertModal : false,
        progressBar : true,
        })

        //On stock le temps d'attente de la progresseBar
        var tempsAttente = 1500;

        // Mini décalage entre les 2 fonciton timmer pour bien qui prend en compte des states.
        var tempsChargement = 1;

        //Fonction timer pour afficher la progresseBar.
        fonction.barProgress(tempsAttente,tempsChargement)

        setTimeout(function() {

            var idUser = localStorage.getItem('id')

            console.log("idUser noteDel", idUser)

            // Utulisation de note API pour envoyer vers le backend les informations du compte.
            ApiBackend.delNote(idUser, ctx.state.position)
            .then(function(data){
            console.log("Data Position", data.data.position)

            //On envois dans redux
            ctx.props.deleteNote(data.data.position)

            // On metà jour les states
            ctx.setState({
                modalDel : false,
            });

            },function(error){
                console.log("Error Del Note",error);
                ctx.setState({
                    bgAlertModal: true,
                    textModal : "Problème interne, merci de réessayer plus tard !",
                    progressBar : false,
                });
            })
        }, tempsAttente);
    }

    //Function Cancel la modal de la suppression des notes.
    noteDelError = () => {
        this.setState({
            bgAlertModal : false,
            textModal : "",
            modalDel : false,
            position : "",
            title : "",
        });
    }

    render() {    
    return (
        <div>
            <span className="close" onClick= {() => this.handleSubmitDel()}><i className="far fa-times-circle"></i></span>
            {/* Modal suppression de la note */}
            <Modal isOpen={this.state.modalDel} toggle={this.toggleDel} className={this.props.className}>
            <ModalHeader toggle={this.toggleDel}>Suppresion de {this.state.title}</ModalHeader>
            <ModalBody>
                {/* Alert rouge avec le message en cas d'erreur. */}
                <Alert color="danger" isOpen={this.state.bgAlertModal}>
                {/* Si la proggresseBarest est false on ne l'affiche pas. */}
                {this.state.textModal}
                </Alert>
                {/* Si la proggresseBarest est false on ne l'affiche pas. */}
                {this.state.progressBar === false 
                ?
                ""
                :
                <div id="myProgress">
                <div id="myBar">1%</div>
                </div>
                }
                Vous êtes sûr de supprimer la note " {this.state.title} " définitivement ?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={this.noteDel}>Suprimé</Button>{' '}
                <Button color="secondary" onClick={this.noteDelError}>Annulé</Button>
            </ModalFooter>
            </Modal>
        </div>
    );
  }
}

//Fonction pour récupérer les notes dans Redux
function mapStateToProps(state) {
    // console.log("mapStateToProps", state.Users)
     return ({
      Users : state.Users,
      Notes : state.Notes,
   })
}
  
//Listes des fonction dispatch pour les messages
function mapDispatchToProps(dispatch) {
    return {
        // Récupération des infos de l'User
        deleteNote(position) { 
            dispatch({
            type: 'deleteNote',
            position : position,
            }) 
        },
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(NoteDel);