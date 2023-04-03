import React, { useState } from "react";
import SetContainer, {
  ColorSelections,
  SelectionColorsContainer,
  SetItem,
  Title,
} from "./index.styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../Inputs/index.css";
import { StyledInput } from "../Inputs/index.styled";
import { globalUser } from "../../../firebase/firebase";
import { addNewTag } from "../../../firebase/database";
import { Button } from "@mui/material";
import {
  updateColors,
  comb1,
  comb2,
  comb3,
} from "../../utilities/commonCss/colors";

export default () => {
  console.log(globalUser);
  //TODO: Auto-Start, Sound settings, Colors
  const [auto, setAuto] = useState(true);
  const [colorComb, setColorComb] = React.useState(comb1);
  const [newTag, setNewTag] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setColorComb(event.target.value);
  };
  const handleSubmit = () => {
    console.log(newTag);
    if (newTag !== "") {
      console.log("addNewTag function called");
      addNewTag(newTag);
    }
    // console.log(object);
    // updateColors(colorComb);
  };

  return (
    <SetContainer>
      <h2>Settings</h2>
      <SetItem>
        <Title>Auto Start</Title>
        <FormControlLabel
          control={<Switch checked={auto} />}
          onClick={() => setAuto(!auto)}
          label={auto ? "On" : "Off"}
        />
      </SetItem>
      <SetItem>
        <Title>Select a sound</Title>
        <FormControlLabel
          control={<Switch checked={auto} />}
          onClick={() => setAuto(!auto)}
          label={auto ? "On" : "Off"}
        />
      </SetItem>
      <SetItem>
        <Title>Colors</Title>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sounds</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={colorComb}
              label="Colors"
              onChange={handleChange}
            >
              <MenuItem value={comb1} selected>
                <SelectionColorsContainer>
                  <ColorSelections color="red" />
                  <ColorSelections color="blue" />
                  <ColorSelections color="black" />
                </SelectionColorsContainer>
              </MenuItem>
              <MenuItem value={comb2}>
                <SelectionColorsContainer>
                  <ColorSelections color="pink" />
                  <ColorSelections color="cyan" />
                  <ColorSelections color="purple" />
                </SelectionColorsContainer>
              </MenuItem>
              <MenuItem value={comb3}>
                <SelectionColorsContainer>
                  <ColorSelections color="orange" />
                  <ColorSelections color="yellow" />
                  <ColorSelections color="grey" />
                </SelectionColorsContainer>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SetItem>
      <SetItem>
        <Title>Add a tag</Title>
        <StyledInput
          variant="outlined"
          id="number-of-sets"
          InputLabelProps={{ sx: { color: "#fff" } }}
          error={newTag.length > 3}
          helperText={newTag.length > 3 && "Max 3 characters"}
          disabled={globalUser == "" ? true : false}
          label="New Tag"
          type="text"
          value={newTag}
          placeholder="Ex. Biology"
          onChange={(e) => setNewTag(e.target.value)}
        />
      </SetItem>
      <Button
        variant="contained"
        disabled={globalUser == "" ? true : false}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </SetContainer>
  );
};
