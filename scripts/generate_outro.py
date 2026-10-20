import os
from PIL import Image, ImageDraw, ImageFont

def build_outro():
    width, height = 1920, 1080
    img = Image.new("RGBA", (width, height), (4, 5, 8, 255)) # #040508 True Obsidian Void
    draw = ImageDraw.Draw(img)

    # Load system fonts
    try:
        font_badge = ImageFont.truetype("arialbd.ttf", 16)
        font_title = ImageFont.truetype("segoeuib.ttf", 68)
        font_sub = ImageFont.truetype("segoeui.ttf", 24)
        font_card_tag = ImageFont.truetype("arialbd.ttf", 14)
        font_card_title = ImageFont.truetype("arialbd.ttf", 22)
        font_card_url = ImageFont.truetype("consola.ttf", 16)
        font_card_desc = ImageFont.truetype("segoeui.ttf", 15)
        font_meta = ImageFont.truetype("consola.ttf", 16)
    except Exception:
        font_badge = font_title = font_sub = font_card_tag = font_card_title = font_card_url = font_card_desc = font_meta = ImageFont.load_default()

    # Center card container
    card_x0, card_y0 = 160, 110
    card_x1, card_y1 = 1760, 970

    # Draw card background (Apple visionOS Smoked Obsidian Glass)
    draw.rounded_rectangle([card_x0, card_y0, card_x1, card_y1], radius=24, fill=(15, 17, 24, 210), outline=(255, 255, 255, 35), width=1)
    # Hairline specular top highlight
    draw.line([card_x0 + 24, card_y0, card_x1 - 24, card_y0], fill=(255, 255, 255, 90), width=1)

    # Top Badge: Verified Deployment & Live Interactive
    badge_text = "VERIFIED DEPLOYMENT • INTERACTIVE RUNTIME • OPEN SOURCE"
    draw.rounded_rectangle([220, 160, 780, 198], radius=8, fill=(16, 185, 129, 25), outline=(16, 185, 129, 120), width=1)
    draw.text((236, 170), badge_text, font=font_badge, fill=(16, 185, 129))

    # Title
    draw.text((220, 225), "TEST THE LIVING ENGINE", font=font_title, fill=(255, 255, 255))
    draw.text((1150, 255), "PRODUCTION READY", font=font_badge, fill=(255, 107, 0))

    # Subtitle
    subtitle = "Not just static Figma frames. We engineered the entire visionOS terminal in high-performance code."
    draw.text((220, 315), subtitle, font=font_sub, fill=(200, 210, 225))

    # 3 Large Feature Columns
    cols = [
        {
            "tag": "01 • LIVE PROTOTYPE",
            "tag_color": (16, 185, 129),
            "title": "Interactive Web Terminal",
            "url": "sanjay3226.github.io/jupiter-terminal-pro",
            "desc": "Test live 60fps Canvas 2D candlestick ticks, 3-channel split liquidity beam routing (Orca + Raydium + Meteora), tactile Hold-to-Execute liquid physics, and bottom-center Dynamic Island toast notifications."
        },
        {
            "tag": "02 • OPEN SOURCE",
            "tag_color": (255, 107, 0),
            "title": "Public GitHub Repository",
            "url": "github.com/sanjay3226/jupiter-terminal-pro",
            "desc": "Built with 100% clean, native web standards (semantic HTML5, 40KB visionOS CSS, 24KB audio & state engine). Zero node bloat, zero build friction. Comprehensive architectural case study included."
        },
        {
            "tag": "03 • DESIGN SYSTEM",
            "tag_color": (139, 92, 246),
            "title": "Figma Master Artboard Suite",
            "url": "Figma Config Bengaluru 2026",
            "desc": "5-frame institutional artboard presentation covering product thesis, full terminal layout, 3-pool split liquidity pathing, Apple visionOS Obsidian design tokens, and execution micro-states."
        }
    ]

    col_w = 480
    gap = 30
    start_x = 220
    start_y = 385
    card_h = 420

    for i, col in enumerate(cols):
        x = start_x + i * (col_w + gap)
        y = start_y
        
        # Glass column card
        draw.rounded_rectangle([x, y, x + col_w, y + card_h], radius=18, fill=(22, 26, 36, 190), outline=(255, 255, 255, 28), width=1)
        # Hairline specular highlight
        draw.line([x + 18, y, x + col_w - 18, y], fill=(255, 255, 255, 70), width=1)

        # Tag
        draw.text((x + 24, y + 26), col["tag"], font=font_card_tag, fill=col["tag_color"])

        # Title
        draw.text((x + 24, y + 62), col["title"], font=font_card_title, fill=(255, 255, 255))

        # URL Box
        url_box_y = y + 105
        draw.rounded_rectangle([x + 24, url_box_y, x + col_w - 24, url_box_y + 40], radius=8, fill=(10, 12, 18, 220), outline=(255, 255, 255, 20), width=1)
        draw.text((x + 36, url_box_y + 11), col["url"], font=font_card_url, fill=(255, 175, 80) if i == 0 else (148, 163, 184))

        # Word wrap description
        words = col["desc"].split()
        lines = []
        cur = ""
        for w in words:
            if len(cur + " " + w) > 36:
                lines.append(cur)
                cur = w
            else:
                cur = cur + " " + w if cur else w
        if cur:
            lines.append(cur)

        draw.text((x + 24, y + 170), "\n".join(lines), font=font_card_desc, fill=(148, 163, 184), spacing=7)

    # Footer Metadata
    meta_text = "BOUNTY TRACK: Solana Open Design Bounty ($1,500 USDC) | AUTHOR: Discipline Guy (@sanjay3226) | SUBMITTED TO: Superteam India"
    draw.text((220, 895), meta_text, font=font_meta, fill=(100, 116, 139))

    out_path = r"f:\Life OS\Projects\Solana-Bounty-AI-Build\presentation-slides\06_LIVE_APP_OUTRO.png"
    img.convert("RGB").save(out_path, "PNG", quality=95)
    print(f"Outro slide generated: {out_path}")

if __name__ == "__main__":
    build_outro()
