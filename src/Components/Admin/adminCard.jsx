import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
export const AdminCard = ({ report, onDelete }) => {
  return (
    <div>
      <Card
        style={{ backgroundColor: "#212121", margin: "2%" }}
        sx={{ maxWidth: 350 }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 15 }} color="#e63946" gutterBottom>
            Name :
          </Typography>
          <Typography sx={{ fontSize: 25 }} color="White" gutterBottom>
            {report.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="#e63946" gutterBottom>
            Message :
          </Typography>
          <Typography color="white" paragraph={true}>
            {report.message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={onDelete}
            color="warning"
            size="small"
            variant="outlined"
            endIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
