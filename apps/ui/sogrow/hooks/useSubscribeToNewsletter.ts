import { useMutation } from 'react-query'

async function subscribe(email) {
  return fetch(`/api/subscribe`, {
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
}

export function useSubscribeToNewsletter() {
  return useMutation<any, any, string>({
    mutationFn: (email) => {
      return subscribe(email)
    },
  })
}
