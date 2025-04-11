import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Alert,
  Fade,
  CircularProgress,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    // Show loading state
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      
      // Reset form after 15 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 15000);
    }, 1000);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ marginBottom: 4 }}
      >
        Get in Touch with Us
      </Typography>

      {/* Explanatory Paragraph */}
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
        sx={{ marginBottom: 4 }}
      >
        We're here to assist you with any questions or concerns you may have.
        Please fill out the form below to send us a message, or use the contact
        information provided to reach out directly. We look forward to hearing
        from you!
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            {formSubmitted ? (
              <Fade in={formSubmitted}>
                <Box 
                  sx={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center",
                    padding: 4,
                    minHeight: "350px"
                  }}
                >
                  <CheckCircleOutlineIcon 
                    sx={{ 
                      fontSize: 64, 
                      color: "success.main",
                      mb: 2 
                    }} 
                  />
                  <Typography variant="h5" gutterBottom align="center">
                    Message Sent Successfully!
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 4 }}>
                    Form will reset in 15 seconds...
                  </Typography>
                </Box>
              </Fade>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  required
                  id="name"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <TextField
                  id="subject"
                  label="Subject"
                  fullWidth
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={loading}
                />
                <TextField
                  required
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />

                {/* Submit Button */}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                  sx={{
                    padding: "12px 24px",
                    textTransform: "none",
                    alignSelf: "center",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Location Map */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ marginBottom: 4 }}
          >
            Visit Us
          </Typography>
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              height: 0,
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.9742453693011!2d-80.94114050521384!3d44.57363738613196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8829fc7d1ca4a9d3%3A0xf56aa2a5ac1e030e!2s1260%202nd%20Ave%20E%2C%20Owen%20Sound%2C%20ON%20N4K%202J3!5e0!3m2!1sen!2sca!4v1724991778263!5m2!1sen!2sca"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ position: "absolute", top: 0, left: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </Box>
          {/* Additional Contact Information */}
          <Box sx={{ textAlign: "center", marginTop: 6 }}>
            <Typography variant="h6" gutterBottom>
              Prefer to talk?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Give us a call at <strong>(226) 256-9974</strong> or email us at{" "}
              <strong>maria-lopaz@dentaflex.ca</strong>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;