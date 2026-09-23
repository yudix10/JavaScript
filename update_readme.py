
from pathlib import Path
import subprocess

# GitHub repository
REPO_URL = "https://github.com/yudix10/JavaScript.git"

# README settings
README_FILE = Path("README.md")
START_MARKER = "<!-- TREE-START -->"
END_MARKER = "<!-- TREE-END -->"

# Files and folders to ignore
IGNORE = {
    ".git",
    "__pycache__",
    ".idea",
    ".vscode",
    "node_modules",
    ".venv",
    "venv"
}


def get_file_tree(root: Path) -> str:
    """Build repository tree."""

    lines = [root.name + "/"]

    def walk(directory: Path, prefix: str = ""):
        items = sorted(
            [
                p for p in directory.iterdir()
                if p.name not in IGNORE
            ],
            key=lambda p: (p.is_file(), p.name.lower())
        )

        for index, item in enumerate(items):
            last = index == len(items) - 1
            branch = "└── " if last else "├── "

            lines.append(prefix + branch + item.name)

            if item.is_dir():
                extension = "    " if last else "│   "
                walk(item, prefix + extension)

    walk(root)
    return "\n".join(lines)


def update_readme():
    root = Path.cwd()
    readme = root / README_FILE

    if not readme.exists():
        readme.write_text(
            "# JavaScript\n\n",
            encoding="utf-8"
        )

    content = readme.read_text(encoding="utf-8")
    tree = get_file_tree(root)

    new_block = (
        f"{START_MARKER}\n"
        "## Структура проекта\n\n"
        "```text\n"
        f"{tree}\n"
        "```\n"
        f"{END_MARKER}"
    )

    if START_MARKER in content and END_MARKER in content:
        before = content.split(START_MARKER)[0]
        after = content.split(END_MARKER, 1)[1]

        updated = before + new_block + after
    else:
        updated = content.rstrip() + "\n\n" + new_block + "\n"

    readme.write_text(updated, encoding="utf-8")
    print("README.md успешно обновлён!")


if __name__ == "__main__":
    update_readme()