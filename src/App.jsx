import { Global, ThemeProvider } from '@emotion/react';
import { Header } from 'Components/layouts/Header/Header';
import { Hero } from 'Components/layouts/Hero/Hero';
import { GlobalStyles, theme } from 'styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header />
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
