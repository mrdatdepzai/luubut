import React from "react";
import { Card, CardContent, TextField, Box, Typography, Collapse } from "@mui/material";
import dc from "../lib/DataConfig";

const Form = ({ setData, data, available }) => {
  return (
    <Collapse in={available && data.about !== ""}>
      <div className="form-container">
        <Card variant="outlined" sx={{ p: 1 }}>
          <CardContent>
            <Typography variant="h6">{dc.memories.title}</Typography>
            <Typography variant="subtitle2" color="text.secondary">{dc.memories.subtitle}</Typography>
            <Box sx={{ width: { md: '90%' } }}>
              <TextField
                error={data.memories.length < 5}
                helperText={data.memories.length < 5 ? dc.memories.memoriesError : ""}
                placeholder={dc.memories.placeholder}
                multiline
                fullWidth
                onChange={(e) => setData({ ...data, memories: e.target.value })}
              />
            </Box>
          </CardContent>
        </Card>
      </div>
    </Collapse>
  );
};

export default Form;