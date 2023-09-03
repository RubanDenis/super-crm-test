import Box from "@mui/material/Box"

interface ErrorProps {
    error: string
}

export function ErrorMessage({ error }: ErrorProps) {
    return <Box sx={{ color: "error.main" }}>{error}</Box>
}
