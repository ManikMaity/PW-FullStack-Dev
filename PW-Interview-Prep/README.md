# Interview Prep

## Index
- [Version Control](#version-control)
    - [PdfLink](#pdflink)
    - [Types](#types)
    - [Common Git Commands](#common-git-commands)
    - [Staging](#staging)
    - [Stashing](#stashing)
    - [Branching](#branching)
    - [Diff between Pull and Fetch](#diff-between-pull-and-fetch)
    - [Branching Importance](#branching-importance)
    - [Git Revert](#git-revert)

## Version Control
- Version Control System is a system that tracks changes in a file or set of files over time.

### PdfLink
- [Version Control PDF](./VersionControll/Version%20Control.pdf);
- [Version Control Interview Questions](./VersionControll/Interview%20Questions.pdf);

### Types
- DVCS (Distributed Version Control System)(ex. - Git) - Multiple repositories
- CVCS (Centralized Version Control System) - Single repository in the server
- LVS (Local Version Control System) - Single repository in the local machine

```
A DVCS (Distributed Version Control System) allows each developer to have a complete local copy of a project repository, enabling them to work offline and commit changes without relying on a central server, while a CVCS (Centralized Version Control System) stores all project data on a single central server, requiring developers to connect to that server to access and update files
```
- Git : Is a DVCS.
- Github : Platform for hosting Git repositories. Work as centeralized location.
- Local Repository - Git repository on your local machine.
- Remote Repository - Git repository hosted on a server.

### Common Git Commands
- `git init` - Initialize a new Git repository.
- `git add` - Stage files for commit.
- `git commit` - Commit changes to the repository.
- `git push` - Push changes to a remote repository.
- `git pull` - Pull changes from a remote repository.
- `git status` - Show the status of the repository.
- `git log` - Show a log of commits.
- `git checkout` - Switch branches.
- `git branch` - Create or switch to branches.
- `git clone` - Clone a repository.

### Staging
- Staging is the process of preparing files for next commit.
- `git add` - Stage files for commit.

### Stashing
- Stashing is the process of temporarily saving changes to the working directory without committing them.
- `git stash` - Stash changes.

### Branching
- Branching is the process of creating new branches in a Git repository.
```bash
git branch <branch_name>
git checkout <branch_name>
```

### Diff between Pull and Fetch
- `git pull` - Get changes from a remote repository and merge them into the local repository.
- `git fetch` - Get changes from a remote repository but not merge them into the local repository.

### Branching Importance
- To create diff version of a project without affecting the main branch.
- Parallel development.
```bash
git checkout -b <branch_name>
```

### Git Revert
- Revert changes to a specific commit.
```bash
git revert <commit_hash>
```

## Operating System

### Computer
- Computer is a electronic device that performs basic arithmetic and logical operations on instructions.
```
Hardware (CPU, RAM, Storage, etc.) + Operating System (Linux, Windows) + Application (Word, Excel, etc.) + User = Computer
```

### Hardware Components
- CPU - Central Processing Unit
- RAM - Random Access Memory
- Storage - Storage Device (Hard Drive, SSD, etc.)
- Input Device - Keyboard, Mouse, etc.
- Output Device - Monitor, Printer, etc.
- Motherboard - Hardware that connects the CPU, RAM, and other components together.
- Power Supply - Power source for the computer.

### Software Components
- Operating System - Software that runs on the computer and controls the hardware components.
- Application - Software that runs on the computer and performs specific tasks.(Word, Excel, etc.)
- System Software - Software that runs on the computer and controls the operating system.(Device Manager, File Explorer, etc.)

### Types of Computers
- Personal Computer (PC, Laptop)
- Server
- Embedded System (Computer in a Car or Drone)
- Super Computer
- Mobile Computer (Smartphone, Tablet)

### Inportance of Operating System
- Foundation of Computer Knowledge.
- Efficient use of computer resources.
- Better understanding of computer hardware and software.
- Security and privacy.

### Operating System 
- Operating System is a software that runs on a computer and controls the hardware components.
- It act as a interface between the user and the hardware components.
- Ex. - Windows, Linux, macOS, Android, etc.

### Types of Operating System
- Simple Batch System
- Real Time Operating System
- Multi Programming Batch System
- Distributed Operating System
- Multiprocessor System4

### Layers Architecture of Operating System
- Hardware - Physical components of the computer.
- Device Driver - Software that controls the hardware components.
- Kernel - Software that runs on the computer and controls the device drivers.
- System Call Interface 
- System Utility
- Application Program
- User Interface