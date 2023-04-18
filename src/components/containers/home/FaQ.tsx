import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";

export default function FaQ() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const faqList = [
    {
      question: "Apakah Semua UMKM Bisa Mendaftar InvestKU?",
      answer: "Ya, semua jenis umkm bisa mendaftar InvestKU jika berhasil lolos dalam tahap verifikasi di sistem kami",
    },
    {
      question: "Apakah ada biaya admin untuk mendaftar InvestKU?",
      answer: "Tidak, anda tidak akan dikenakan biaya admin saat mendaftar. Namun kami akan memotong 1.2% dari total Dana yang anda dapat",
    },
    {
      question: "Apakah InvestKU aman?",
      answer: "Ya, InvestKU merupakan platform crowdfunding yang aman karena telah terdaftar dan diawasi oleh OJK",
    },
    {
      question: "Berapa lama proses verifikasi di InvestKU?",
      answer: "Proses verifikasi data di InvestKU membutuhkan waktu sekitar 1 - 2 hari tergantung berkas yang dikirimkan",
    },
  ];

  return (
    <Box paddingY={mediumScreen ? "8vh" : "4vh"}>
      <Container maxW={containerMaxWidth}>
        <Box data-aos="fade">
          <Heading as="h1" size="xl">
            Frequenly Ask Questions
          </Heading>
          <Text mt={2}>Beberapa pertanyaan yang sering ditanyakan tentang InvestKU</Text>
        </Box>
        <Accordion defaultIndex={[0]} allowMultiple marginTop="40px" data-aos="fade">
          {faqList.map((faq, key) => (
            <AccordionItem>
              <h2>
                <AccordionButton paddingY="12px">
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontWeight={700}>{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
