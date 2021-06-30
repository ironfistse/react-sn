import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  return (
    <div>{props.message}</div>
  )
}

const DialogItem = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
  )
}

const Dialogs = () => {
  const dialogs = [
    { id: 1, name: 'Oliver' },
    { id: 2, name: 'Neil' },
    { id: 3, name: 'Stewart' },
    { id: 4, name: 'Sonya' },
  ];
  const messages = [
    { id: 1, message: 'Message 1' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What is the capital of Great Britain?' },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} />) }
      </div>
      <div className={classes.messages}>
        { messages.map(el => <Message key={el.id} message={el.message} />) }
      </div>
    </div>
  );
};

export default Dialogs;