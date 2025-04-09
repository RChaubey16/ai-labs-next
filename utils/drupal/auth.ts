import { drupalAuthClient } from 'drupal-auth-client'
import { CloudCog } from 'lucide-react'

interface TokenArgs {
  uri: string
  clientId: string
  clientSecret: string
}

export const getToken = async ({ uri, clientId, clientSecret }: TokenArgs) => {
  console.log("IDDDDD", uri)
  const client = await drupalAuthClient(uri, 'client_credentials', {
    clientId,
    clientSecret,
  })

  console.log("Client", client)
  return `${client.token_type} ${client.access_token}`
}
