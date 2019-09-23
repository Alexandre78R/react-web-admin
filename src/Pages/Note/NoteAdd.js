//Import de React
import React from 'react';

//Import de la liste composent de reactstrap
import {
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
} from 'reactstrap';

//Import du composent connect de react-redux
import {connect} from 'react-redux';

//Import du composent API
import API from '../../utils/API.js';

//Import du composent circlePiker de react-color
import { CirclePicker } from 'react-color';


class NoteAdd extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //Stat du titre 
      title : "Le Titre",
      //State de la coleur
      color : "#4caf50",
      //State de la date
      date : "JJ/MM/YYYY",
      //State du temps
      temps : "00h00",
      //State de la note
      note : "La note",
      //Preview de la note création
      modal : false,
    };
  }
    //Fonction d'affichage du modal Ou de  la fermeture du modal
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            title : "Le Titre",
            color : "#4caf50",
            date : "JJ/MM/YYYY",
            temps : "00h00",
            note : "La note",
        }));
    }

    //Function Cancel la modal de la suppression des notes.
    noteAddError = () => {
        this.setState({
            modal : false,
            title : "Le Titre",
            color : "#4caf50",
            date : "JJ/MM/YYYY",
            temps : "00h00",
            note : "La note",
        });
    }

    //Function pour metre la coleur à jour dans le state.
    handleChangeColor = (color) => {
        // console.log("color",color.hex)
        this.setState({ color: color.hex });
    };

    render() {    
    return (
        <div>
        <Button className = "note-button" color="success" onClick={this.toggle}>Ajouté une note</Button>
        {/* Modal ajout de la note */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Ajouter une note</ModalHeader>
            <ModalBody>
                <Label className= "addNote">Créer votre note :</Label> <Label className= "addNotePreview">View de votre futur note :</Label>
                <Row className="noteAddRow">
                    <div className="noteAdd no-cursor">
                        <Input type="textTitre" name="titre" id='note-topic'style={{backgroundColor : this.state.color}} placeholder="Taper votre titre" onChange={e=>this.setState({title:e.target.value})}/>
                    <div className="note-body">
                        <Input type="textarea" name="note" id="exampleTextNoteADD"  placeholder="Taper votre note" onChange={e=>this.setState({note:e.target.value})}/>
                    </div>
                    <strong className="note-footer" style={{backgroundColor : this.state.color,}}>
                        <div className="noteFooterText">{this.state.date} à {this.state.temps}</div>
                    </strong>
                    </div>

                    <div className="noteAddPreview no-cursor">
                    <strong  className='note-topic' style={{backgroundColor : this.state.color}}>
                        {this.state.title}
                    </strong>
                    <div className="note-body">
                        {this.state.note}
                    </div>
                    <strong className="note-footer" style={{backgroundColor : this.state.color,}}>
                        <div className="noteFooterText">{this.state.date} à {this.state.temps}</div>
                    </strong>
                    </div>
                </Row>
                <Label className="noteAddTitleColor">Couleur :</Label>
                <CirclePicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeColor }
                />
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={this.noteAddError}>Annulé</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
  }
}

 export default connect(null, null)(NoteAdd);