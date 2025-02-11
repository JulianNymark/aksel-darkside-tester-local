import {
  Accordion,
  Alert,
  Box,
  Button,
  Heading,
  Page,
  VStack,
} from "@navikt/ds-react";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "@navikt/ds-react/Accordion";
import { BoxNew } from "@navikt/ds-react/Box";
import { PageBlock } from "@navikt/ds-react/Page";
import { Theme } from "@navikt/ds-react/Theme";
import { ReactNode } from "react";

const MyCard = ({ children }: { children: ReactNode }) => {
  return (
    <Box shadow="medium" padding="5" borderRadius="xlarge" width="fit-content">
      {children}
    </Box>
  );
};

const MyNewCard = ({ children }: { children: ReactNode }) => {
  return (
    <BoxNew
      shadow="dialog"
      padding="space-20"
      borderRadius="xlarge"
      borderColor="success"
      borderWidth="2"
      width="fit-content"
    >
      {children}
    </BoxNew>
  );
};

export default function Home() {
  return (
    <div>
      <div
        className="dark css-only"
        style={{
          backgroundColor: "var(--ax-bg-default)",
          color: "var(--ax-text-neutral)",
        }}
      >
        <MyCard>old dog</MyCard>
        <MyCard>old cat</MyCard>
        <VStack gap="8">
          <MyNewCard>dog</MyNewCard>
          <MyNewCard>cat</MyNewCard>
          <MyNewCard>bird</MyNewCard>
          <MyNewCard>generic animal</MyNewCard>
        </VStack>
      </div>

      <Theme theme="dark">
        <Page>
          <PageBlock width="xl" gutters>
            <VStack gap="8">
              <Heading level="1" size="xlarge">
                My app
              </Heading>
              <div>
                <Alert variant="success">Alert: Success</Alert>
              </div>
              <div>
                <Button variant="primary">I am a button</Button>
                <Accordion>
                  <AccordionItem>
                    <AccordionHeader>Section 1</AccordionHeader>
                    <AccordionContent>Content 1</AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader>Section 2</AccordionHeader>
                    <AccordionContent>Content 2</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div data-color-role="meta-purple">
                <Button variant="primary">I am a button</Button>
              </div>
              <MyCard>old dog</MyCard>
              <MyCard>old cat</MyCard>
              <VStack gap="8">
                <MyNewCard>dog</MyNewCard>
                <MyNewCard>cat</MyNewCard>
                <MyNewCard>bird</MyNewCard>
                <MyNewCard>generic animal</MyNewCard>
              </VStack>
            </VStack>
          </PageBlock>
        </Page>
      </Theme>
    </div>
  );
}
