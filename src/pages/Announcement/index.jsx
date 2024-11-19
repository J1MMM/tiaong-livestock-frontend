import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Announcement = () => {
  return (
    <PageContainer>
      <Stack
        width="100%"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Announcement for Farmers
          </Typography>
          <Typography variant="body1">
            Stay updated with the latest news and updates for farmers.
          </Typography>
        </Box>

        <Button variant="contained">Add Announcement</Button>
      </Stack>

      <Stack
        mt={3}
        gap={2}
        width="100%"
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        height={"calc(100vh - 160px)"}
        p={2}
        sx={{
          overflowY: "scroll",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            padding: 2,
            maxWidth: 300,
            minHeight: 250,
            maxHeight: 250,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" color="primary.main" fontWeight={600}>
              Card Title
            </Typography>
            <Typography variant="body2" color="#888">
              Date: 09/12/1243
            </Typography>
            <Typography variant="body1" mt={1} color="#888">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius,
              a cumque, dolorum nostrum nobis quo at non maiores ea deserunt
              eaque molestias ipsam velit. In asperiores commodi molestias eum.
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" sx={{ mt: "auto" }}>
              See More
            </Button>
          </Box>
        </Paper>
      </Stack>
    </PageContainer>
  );
};

export default Announcement;
