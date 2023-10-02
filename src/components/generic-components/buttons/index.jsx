import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return(
    <Button startIcon={<ArrowBackIosIcon className="icon" />} className="mt-30 back-button" size="small" onClick={handleBack}>Back</Button>
  )
}