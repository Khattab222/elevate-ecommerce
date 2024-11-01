'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const QueryProvider = ({children}) => {
    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
  )
}

export default QueryProvider