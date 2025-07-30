import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01', 
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
