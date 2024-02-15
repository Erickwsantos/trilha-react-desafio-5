import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ulukindyghxgszuwikyp.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdWtpbmR5Z2h4Z3N6dXdpa3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxODk2NjEsImV4cCI6MjAyMjc2NTY2MX0.kJsMoHnmW1yWZy0rbVxm80T0IWXwQklhaEVhSoquigg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdWtpbmR5Z2h4Z3N6dXdpa3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxODk2NjEsImV4cCI6MjAyMjc2NTY2MX0.kJsMoHnmW1yWZy0rbVxm80T0IWXwQklhaEVhSoquigg"
    }
})