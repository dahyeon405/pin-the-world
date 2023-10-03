import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'
import { ScrollToTop } from '@/components/ScrollToTop'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ScrollToTop />
        <Outlet />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
