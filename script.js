// Menu bar: open and close (dropdown toggle)
let sidemenu = document.getElementById("sidemenu");
let menuOpen = false;

function openmenu(){
    sidemenu.classList.add('open');
    menuOpen = true;
}

function closemenu(){
    sidemenu.classList.remove('open');
    menuOpen = false;
}

function togglemenu(){
    if(menuOpen){
        closemenu();
    } else {
        openmenu();
    }
}

// Close menu when clicking on a link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closemenu();
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('div[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Theme Switcher
const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-btn");
const body = document.body;

function toggleTheme() {
    body.classList.toggle("light-theme");
    const isLight = body.classList.contains("light-theme");
    
    // Update desktop toggle icon
    const desktopIcon = themeToggle?.querySelector("i");
    if (desktopIcon) {
        desktopIcon.classList.toggle("fa-moon", !isLight);
        desktopIcon.classList.toggle("fa-sun", isLight);
    }
    
    // Update mobile toggle icon and text
    if (mobileThemeToggle) {
        const mobileIcon = mobileThemeToggle.querySelector("i");
        const mobileText = mobileThemeToggle.querySelector("span");
        if (mobileIcon) {
            mobileIcon.classList.toggle("fa-moon", !isLight);
            mobileIcon.classList.toggle("fa-sun", isLight);
        }
        if (mobileText) {
            mobileText.textContent = isLight ? "Light Mode" : "Dark Mode";
        }
    }
}

themeToggle?.addEventListener("click", toggleTheme);
mobileThemeToggle?.addEventListener("click", toggleTheme);

// ==========================================
// Interactive Terminal
// ==========================================
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

// Command definitions
const terminalCommands = {
    help: {
        description: 'Show available commands',
        execute: () => {
            return [
                '<span class="output-info">Available Commands</span>',
                '',
                '<span class="output-success">help</span>      Show this help message',
                '<span class="output-success">about</span>     Learn about Jeet',
                '<span class="output-success">skills</span>    View technical skills',
                '<span class="output-success">projects</span>  See project highlights',
                '<span class="output-success">contact</span>   Get contact information',
                '<span class="output-success">resume</span>    Open resume',
                '<span class="output-success">github</span>    Visit GitHub profile',
                '<span class="output-success">clear</span>     Clear terminal',
                '<span class="output-success">date</span>      Show current date',
                '<span class="output-success">whoami</span>    Display user info',
                '<span class="output-success">neofetch</span>  System information',
                '<span class="output-success">ls</span>        List files',
                '<span class="output-success">cd</span>        Navigate sections'
            ];
        }
    },
    about: {
        description: 'About Jeet',
        execute: () => {
            return [
                '<span class="output-info">About Jeet Majumdar</span>',
                '',
                '🎓 Engineering student @ Jadavpur University',
                '💻 Full-Stack Developer & ML Engineer',
                '🚀 Building scalable apps with data-driven insights',
                '🌟 Passionate about Web3, AI/ML, and Open Source'
            ];
        }
    },
    skills: {
        description: 'Technical skills',
        execute: () => {
            return [
                '<span class="output-info">Technical Arsenal</span>',
                '',
                '<span class="output-success">Frontend</span>   React, Next.js, TypeScript, Tailwind',
                '<span class="output-success">Backend</span>    Node.js, Express, Python, FastAPI',
                '<span class="output-success">ML/AI</span>      PyTorch, TensorFlow, Scikit-learn',
                '<span class="output-success">Database</span>   MongoDB, PostgreSQL, Redis',
                '<span class="output-success">DevOps</span>     Docker, Git, Linux, Azure'
            ];
        }
    },
    projects: {
        description: 'Project highlights',
        execute: () => {
            setTimeout(() => {
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            }, 500);
            return [
                '<span class="output-info">Featured Projects</span>',
                '',
                '📦 <span class="output-success">NextMusic</span>',
                '   Next.js landing site & UI kit',
                '',
                '🤖 <span class="output-success">CNN-Disease Predictor</span>',
                '   AI-powered diagnostics system',
                '',
                '💬 <span class="output-success">RealChat</span>',
                '   Real-time chat application',
                '',
                '📊 <span class="output-success">Fabricland Quest</span>',
                '   Power BI analytics dashboard',
                '',
                '<span class="output-dim">Scrolling to projects section...</span>'
            ];
        }
    },
    contact: {
        description: 'Contact information',
        execute: () => {
            return [
                '<span class="output-info">Contact Information</span>',
                '',
                '📧 <span class="output-success">Email</span>',
                '   officialjeetmajumdar2003@outlook.com',
                '',
                '🔗 <span class="output-success">LinkedIn</span>',
                '   linkedin.com/in/jeet-majumdar648',
                '',
                '🐦 <span class="output-success">Twitter</span>',
                '   @jeet_exist',
                '',
                '💼 <span class="output-success">GitHub</span>',
                '   github.com/JeetMajumdar2003'
            ];
        }
    },
    resume: {
        description: 'Open resume',
        execute: () => {
            window.open('assets/Resume.pdf', '_blank');
            return ['<span class="output-success">✓ Opening resume in new tab...</span>'];
        }
    },
    github: {
        description: 'Visit GitHub',
        execute: () => {
            window.open('https://github.com/JeetMajumdar2003', '_blank');
            return ['<span class="output-success">✓ Opening GitHub profile...</span>'];
        }
    },
    clear: {
        description: 'Clear terminal',
        execute: () => {
            const welcomeHTML = `<div class="terminal-welcome">
                <p class="output-info">Welcome to Jeet's Portfolio Terminal v2.0</p>
                <p class="output-dim">Type <span class="output-success">help</span> to see available commands</p>
                <p class="output-dim">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
            </div>`;
            terminalOutput.innerHTML = welcomeHTML;
            return null;
        }
    },
    date: {
        description: 'Show date',
        execute: () => {
            const now = new Date();
            return [
                '<span class="output-info">' + now.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }) + '</span>',
                '<span class="output-dim">' + now.toLocaleTimeString() + '</span>'
            ];
        }
    },
    whoami: {
        description: 'Display user',
        execute: () => {
            return ['<span class="output-success">visitor</span>@<span class="output-info">jeet-portfolio</span>'];
        }
    },
    neofetch: {
        description: 'System info',
        execute: () => {
            return [
                '<span class="output-info">System Information</span>',
                '',
                '<span class="output-success">OS</span>        Portfolio v2.0',
                '<span class="output-success">Host</span>      GitHub Pages',
                '<span class="output-success">Kernel</span>    JavaScript ES6+',
                '<span class="output-success">Shell</span>     Interactive Terminal',
                '<span class="output-success">Theme</span>     Cyberpunk Neon',
                '<span class="output-success">Icons</span>     Font Awesome 6',
                '<span class="output-success">Terminal</span>  Custom Built'
            ];
        }
    },
    sudo: {
        description: 'Superuser',
        execute: () => {
            return ['<span class="output-error">✗ Permission denied: Nice try! 😄</span>'];
        }
    },
    ls: {
        description: 'List files',
        execute: () => {
            return [
                '<span class="output-info">drwxr-xr-x</span>  <span class="output-success">about/</span>',
                '<span class="output-info">drwxr-xr-x</span>  <span class="output-success">projects/</span>',
                '<span class="output-info">drwxr-xr-x</span>  <span class="output-success">skills/</span>',
                '<span class="output-info">-rw-r--r--</span>  resume.pdf',
                '<span class="output-info">-rw-r--r--</span>  contact.json'
            ];
        }
    },
    cd: {
        description: 'Change directory',
        execute: (args) => {
            const sections = ['about', 'portfolio', 'arsenal', 'contact'];
            if (args && sections.includes(args.toLowerCase())) {
                document.getElementById(args.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                return ['<span class="output-success">✓ Navigating to ' + args + '...</span>'];
            }
            return [
                '<span class="output-error">✗ Directory not found: ' + (args || '(empty)') + '</span>',
                '<span class="output-dim">Available: about, portfolio, arsenal, contact</span>'
            ];
        }
    },
    echo: {
        description: 'Echo text',
        execute: (args) => {
            return [args || ''];
        }
    },
    hello: {
        description: 'Greeting',
        execute: () => {
            return ['<span class="output-success">Hello! Welcome to my portfolio! 👋</span>'];
        }
    },
    hire: {
        description: 'Hire me',
        execute: () => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            return [
                '<span class="output-success">🎉 Great choice! Let\'s connect!</span>',
                '<span class="output-dim">Scrolling to contact section...</span>'
            ];
        }
    }
};

// Command history
let commandHistory = [];
let historyIndex = -1;

// Process terminal input
if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = terminalInput.value.trim();
            if (input) {
                commandHistory.push(input);
                historyIndex = commandHistory.length;
                processCommand(input);
                terminalInput.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            autocomplete(terminalInput.value);
        }
    });
}

function processCommand(input) {
    const [cmd, ...args] = input.toLowerCase().split(' ');
    const arg = args.join(' ');
    
    // Add command to output with styling
    addCommandLine(input);
    
    if (terminalCommands[cmd]) {
        const result = terminalCommands[cmd].execute(arg);
        if (result) {
            addOutputBlock(result);
        }
    } else if (input) {
        addOutputBlock([
            '<span class="output-error">✗ Command not found: ' + cmd + '</span>',
            '<span class="output-dim">Type <span class="output-success">help</span> for available commands</span>'
        ]);
    }
    
    // Scroll to bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function addCommandLine(command) {
    const div = document.createElement('div');
    div.className = 'command-line';
    div.innerHTML = '<span class="output-prompt">$</span> <span class="output-command">' + command + '</span>';
    terminalOutput.appendChild(div);
}

function addOutputBlock(lines) {
    const block = document.createElement('div');
    block.className = 'output-block';
    
    if (Array.isArray(lines)) {
        lines.forEach(line => {
            const p = document.createElement('p');
            p.innerHTML = line;
            block.appendChild(p);
        });
    } else {
        const p = document.createElement('p');
        p.innerHTML = lines;
        block.appendChild(p);
    }
    
    terminalOutput.appendChild(block);
}

function addToOutput(html) {
    const line = document.createElement('p');
    line.innerHTML = html;
    terminalOutput.appendChild(line);
}

function autocomplete(partial) {
    const matches = Object.keys(terminalCommands).filter(cmd => 
        cmd.startsWith(partial.toLowerCase())
    );
    if (matches.length === 1) {
        terminalInput.value = matches[0];
    } else if (matches.length > 1) {
        addOutputBlock(['<span class="output-dim">Suggestions: ' + matches.join(', ') + '</span>']);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
}

// Contact Form (Google Sheets / Formspree)
const scriptURL = 'https://script.google.com/macros/s/AKfycbwbwQZhD2X9BgsWVqWdQ-2YXwpdV-m7ROGa45VzSzOTqTDxPibjkVEZ4zN0DocVohgxKw/exec'; // Replace with your Google Script URL or Formspree Endpoint
const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

if(form){
    form.addEventListener('submit', e => {
        e.preventDefault();
        msg.innerHTML = "Sending data packets...";
        msg.style.color = "var(--accent-cyan)";
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message transmitted successfully.";
                msg.style.color = "#00ff00";
                setTimeout(function(){
                    msg.innerHTML = "";
                    form.reset();
                }, 5000);
            })
            .catch(error => {
                msg.innerHTML = "Transmission failed. Check connection.";
                msg.style.color = "#ff0000";
                console.error('Error!', error.message);
            });
    });
}

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        workItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// About Tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

