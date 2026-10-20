import os
import shutil
from PIL import Image, ImageDraw, ImageFont

def build_cover():
    width, height = 1920, 1080
    img = Image.new("RGBA", (width, height), (4, 5, 8, 255)) # #040508 True Obsidian Void
    draw = ImageDraw.Draw(img)



    # Load system fonts
    try:
        font_badge = ImageFont.truetype("arialbd.ttf", 18)
        font_title = ImageFont.truetype("segoeuib.ttf", 74)
        font_sub = ImageFont.truetype("segoeui.ttf", 26)
        font_desc = ImageFont.truetype("segoeui.ttf", 20)
        font_feature_title = ImageFont.truetype("arialbd.ttf", 18)
        font_feature_desc = ImageFont.truetype("segoeui.ttf", 15)
        font_meta = ImageFont.truetype("consola.ttf", 16)
    except Exception:
        font_badge = font_title = font_sub = font_desc = font_feature_title = font_feature_desc = font_meta = ImageFont.load_default()

    # Center card container
    card_x0, card_y0 = 160, 120
    card_x1, card_y1 = 1760, 960

    # Draw card background
    draw.rounded_rectangle([card_x0, card_y0, card_x1, card_y1], radius=24, fill=(15, 17, 24, 210), outline=(255, 255, 255, 35), width=1)
    # Hairline specular top highlight
    draw.line([card_x0 + 24, card_y0, card_x1 - 24, card_y0], fill=(255, 255, 255, 90), width=1)

    # Badge: Solana Bounty
    badge_text = "SOLANA SUMMIT INDIA × FIGMA CONFIG BENGALURU 2026"
    draw.rounded_rectangle([220, 170, 860, 210], radius=8, fill=(255, 107, 0, 30), outline=(255, 107, 0, 120), width=1)
    draw.text((236, 180), badge_text, font=font_badge, fill=(255, 150, 60))

    # Title
    draw.text((220, 240), "JUPITER TERMINAL PRO", font=font_title, fill=(255, 255, 255))
    draw.text((1110, 275), "v2.5 LIQUID ENGINE", font=font_badge, fill=(255, 107, 0))

    # Subtitle
    draw.text((220, 340), "Apple visionOS Smoked Obsidian Glassmorphism × Solana High-Speed Execution Architecture", font=font_sub, fill=(200, 210, 225))

    # Overview Paragraph
    overview = (
        "Designed to eliminate cognitive drag and fragmented swap friction on Solana. Replaces bloated multi-tab\n"
        "aggregators with an ergonomic, single-pane terminal featuring live high-DPI candlestick analytics, 3-pool split\n"
        "liquidity routing (Orca + Raydium + Meteora), Jito MEV front-run shielding, and bottom-center Dynamic Island alerts."
    )
    draw.text((220, 400), overview, font=font_desc, fill=(148, 163, 184), spacing=8)

    # 4 Feature Pillars (Cards at bottom)
    features = [
        ("01. Live Candlestick & Volume Canvas", "High-DPI backing-store canvas scaling with live simulated ticks, 20 EMA trendline & volume profile bars."),
        ("02. 3-Channel Split Liquidity Router", "Visualizes real-time liquidity pathing across Orca CLMM (48%), Raydium (34%), and Meteora DLMM (18%)."),
        ("03. Jito MEV Shield & Liquid Hold", "Guaranteed single-bundle front-run protection with tactile Hold-to-Execute liquid progress confirmation."),
        ("04. Dynamic Island & visionOS Glass", "Smoked obsidian glass (40px blur, 180% saturation) with non-obtrusive bottom-center floating toast pills.")
    ]

    col_w = 360
    gap = 20
    start_x = 220
    start_y = 540

    for i, (title, desc) in enumerate(features):
        x = start_x + i * (col_w + gap)
        y = start_y
        draw.rounded_rectangle([x, y, x + col_w, y + 260], radius=16, fill=(22, 26, 36, 180), outline=(255, 255, 255, 25), width=1)
        draw.line([x + 16, y, x + col_w - 16, y], fill=(255, 255, 255, 60), width=1)
        draw.text((x + 20, y + 24), title, font=font_feature_title, fill=(255, 175, 80))
        
        # Word wrap description
        words = desc.split()
        lines = []
        cur = ""
        for w in words:
            if len(cur + " " + w) > 28:
                lines.append(cur)
                cur = w
            else:
                cur = cur + " " + w if cur else w
        if cur:
            lines.append(cur)
        draw.text((x + 20, y + 68), "\n".join(lines), font=font_feature_desc, fill=(148, 163, 184), spacing=6)

    # Footer Metadata
    meta_text = "BOUNTY TRACK: Solana Open Design Bounty ($1,250 USDC) | AUTHOR: Discipline Guy | FIGMA SUITE: 5-Frame Architecture"
    draw.text((220, 890), meta_text, font=font_meta, fill=(100, 116, 139))

    out_path = r"f:\Life OS\Projects\Solana-Bounty-AI-Build\presentation-slides\01_COVER_SLIDE.png"
    img.convert("RGB").save(out_path, "PNG", quality=95)
    print(f"Cover slide generated: {out_path}")

if __name__ == "__main__":
    build_cover()
