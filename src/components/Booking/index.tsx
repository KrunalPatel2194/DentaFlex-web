import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


interface Shift {
  _id: string;
  clinicName: string;
  date: string;
  time: string;
  role: string;
  status: string;
}

const Booking = () => {
  const [shifts, setShifts] = useState<Shift[]>([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    
    const fetchShifts = async () => {
      const token = localStorage.getItem("site");
      if (!token) {
        alert("Please login to view shifts.");
        navigate("/login");
        return;
      }
    
      try {
        console.log("Fetching shifts with token:", token);
        const response = await fetch("/api/auth/shifts", {
          method: "GET",
          headers: {
          //  "Content-Type": "application/json",
            Authorization: token,
          },
        });
    
        // console.log("Response status:", response.status);
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", response.status, errorData);
  throw new Error(errorData.message || "API request failed");
          // alert(errorData.message || "Unable to fetch shifts. Please try again.");
          return;
        }
    
        const data: Shift[] = await response.json();
        setShifts(data);
        console.log("Fetched shifts:", data);
      } catch (error) {
        console.error("Error fetching shifts:", error);
        alert(`.`);
        
      }
    };

    fetchShifts();
  }, [navigate]);

  const handleBookShift = async (shiftId: string) => {
    console.log("ShiftId passed to handleBookShift:", shiftId);
    const token = localStorage.getItem("site");
    if (!token) {
      alert("Please login to book a shift.");
      navigate("/login");
      return;
    }
    
    try {
      const response = await fetch(`/api/auth/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ ShiftId : shiftId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error booking shift try again and again:", errorData.message || "Unknown error");
        alert(errorData.message || "Failed to book shift. Please try again.");
        return;
      }

      const result = await response.json();
      alert(result.message || "Shift booked successfully!");

     
      setShifts(shifts.filter((shift) => shift._id !== shiftId));
    } catch (error) {
      console.error("Error booking shift try again:", error);
      alert("Failed to book shift. Please try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ margin: 4 }}>
        Available Shifts
      </Typography>

      <Grid container spacing={4}>
        {shifts.length > 0 ? (
          shifts.map((shift) => (
            <Grid item xs={12} sm={6} md={4} key={shift._id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{shift.clinicName}</Typography>
                  <Typography>
                    Date: {new Date(shift.date).toLocaleDateString()}
                  </Typography>
                  <Typography>Time: {shift.time}</Typography>
                  <Typography>Role: {shift.role}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    
                    onClick={() => {
                      console.log("Clicked ShiftId:", shift._id); // Log the ID
                      handleBookShift(shift._id);
                    }}
                    fullWidth
                    sx={{ marginTop: 2 }}
                  >
                    Book Shift
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            No shifts available
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Booking;
