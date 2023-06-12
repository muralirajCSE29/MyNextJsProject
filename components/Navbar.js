import { AppBar, Grid, Toolbar, Typography, styled } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "black",
});

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h5">Next</Typography>
          <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
            <Grid item xs={4} md={2}>
              <Link style={linkStyle} href="/" passHref>
                Home
              </Link>
            </Grid>
            <Grid item xs={4} md={2}>
              <Link style={linkStyle} href="/about" passHref>
                About
              </Link>
            </Grid>
            <Grid item xs={4} md={2}>
              <Link style={linkStyle} href="/nested/contacts" passHref>
                Contacts
              </Link>
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
