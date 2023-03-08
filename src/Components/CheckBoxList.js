// import * as React from 'react';
import React, { useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
import { SlTrash } from "react-icons/sl";

//STEP 5 how to delete... 

export default function CheckboxList(props) { //STEP 4: accept props, destructure
//  const [checked, setChecked] = React.useState([0]);
  const [checked, setChecked] = useState([]); //useState list indicates what items are checked by default

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    // indexOf: https://is.gd/PXbNVZ
    const newChecked = [...checked];

    if (currentIndex === -1) { //if the item doesnt exist (-1)
      newChecked.push(value); //then add to it
    } else {    //otherwise delete it
      newChecked.splice(currentIndex, 1); //splice it out
    }

    setChecked(newChecked); //set new updated State of Checked
  };

  return (
    // STEP 4 props.myList.map... 
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.myList.map((value, i) => {
        //[0, 1, 2, 3] hmmm but i want it to go through MY to do items... ref STEP 2
        const labelId = `checkbox-list-label-${i}`;

        return (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => {props.deleteDoing(i)}}>
                <SlTrash />
              {/* we are updating the state... at the APP level 
              create a function, that wraps the other function, that is not being run until ... 
              you cannot just run deleteDoing() */}
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(i) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${i + 1}) ${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}