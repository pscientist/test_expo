const { useEffect } = require("react");

const matchDark = '';

function useDarkMode()
{
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const matcher = window.matchMedia(matchDark);
        
    }, []);

    return isDark;
}