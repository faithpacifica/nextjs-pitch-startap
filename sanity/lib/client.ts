import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-07-18', 
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
