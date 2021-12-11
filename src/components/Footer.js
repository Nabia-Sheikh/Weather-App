const Footer = () => {
    return (
      <>
        <footer className="footer">
          <p>
            Built with ❤️ by
            <a
              href="https://github.com/Nabia-Sheikh"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
              Nabia Sheikh
            </a>
          </p>
          <a
            className="github-button"
            href="https://github.com/Nabia-Sheikh/Weather-App"
            rel="noreferrer"
            target="_blank"
            data-icon="octicon-repo-forked"
            data-show-count="true"
            aria-label="Fork Nabia-Sheikh/weather-app on GitHub"
          >
            Fork
          </a>
          <a
            className="github-button"
            href="https://github.com/Nabia-Sheikh/Weather-App"
            rel="noreferrer" 
            target="_blank"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star Nabia-Sheikh/weather-app on GitHub"
          >
            Star
          </a>
        </footer>
      </>
    );
  };
  
  export default Footer;
  