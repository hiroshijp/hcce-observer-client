type Path = {
    path: string;
    enable: boolean;
}

export const paths :Path[] = [
    {path: "/history", enable: true},
    {path: "/history?num=5", enable: true},
    {path: "/history?visitor_id=1", enable: false},
    {path: "/history?visited_from=spoke", enable: false},
    {path: "/history?start=2024-01-01", enable: false},
    {path: "/history?start=2024-01-01&end=2024-12-31", enable: false},
    {path: "/history?", enable: false},
    {path: "/visitor", enable: false},
    {path: "/visitor/latest", enable: false},
    {path: "/visitor?num=10", enable: false},
    {path: "/user", enable: false},
    {path: "/user?num=10", enable: false},
]