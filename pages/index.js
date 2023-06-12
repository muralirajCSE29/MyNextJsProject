import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Box, Chip, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box sx={{marginBottom:20}}>
        <Head>
          <title>Next | Home</title>
          <meta name="keyword" content="home"/>
        </Head>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Image src='/1.png' width={500} height={200} marginTop={20}/>
          <Stack alignSelf='flex-start' spacing={5} mt={10} mb={20}>
        <Typography variant="h3">Introduction</Typography>
        <Typography color='grey'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type
          
        </Typography>
      </Stack>
          <Link href="/nested">
           <Chip label= " Go to Users"/>
            </Link>
        </Stack>
      </Box>
    </div>
  );
}
