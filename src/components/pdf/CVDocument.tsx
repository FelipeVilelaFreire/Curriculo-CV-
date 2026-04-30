"use client";
import React from "react";
import {
  Document, Page, Text, View, Image, Link, StyleSheet,
} from "@react-pdf/renderer";
import { type Messages } from "@/lib/LanguageContext";
import { personal, companies, toefl, hobbyTags, volunteerOrg } from "@/data/personal";
import { SKILL_GROUPS } from "@/data/skills";
import { hobbymap, prognum, sonho } from "@/data/projects";

const C = {
  cyan:      "#06b6d4",
  cyanLight: "#ecfeff",
  dark:      "#18181b",
  muted:     "#71717a",
  border:    "#e4e4e7",
  bg:        "#f4f4f5",
  white:     "#ffffff",
  green:     "#16a34a",
  greenBg:   "#f0fdf4",
  orange:    "#ea580c",
  orangeBg:  "#fff7ed",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    fontFamily: "Helvetica",
    color: C.dark,
  },

  // ─────────────────────────────────────────────────────────────────────
  // HEADER
  // ─────────────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },
  photo:    { width: 68, height: 68, borderRadius: 34, marginRight: 18, marginTop: 2 },
  hRight:   { flex: 1 },
  name:     { fontSize: 21, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  subtitle: { fontSize: 8, color: C.muted, marginBottom: 6 },
  contactRow: { flexDirection: "row", marginBottom: 6 },
  cText: { fontSize: 7, color: C.muted, marginRight: 14 },
  cLink: { fontSize: 7, color: C.cyan,  marginRight: 14 },
  badgeRow: { flexDirection: "row", marginBottom: 9 },
  badge: {
    fontSize: 6.5, fontFamily: "Helvetica-Bold", color: C.muted,
    backgroundColor: C.bg, borderRadius: 3,
    paddingHorizontal: 6, paddingVertical: 2, marginRight: 6,
  },
  langStrip: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.3,
    borderTopColor: C.border,
    paddingTop: 7,
  },
  langStripLabel: {
    fontSize: 5.5, fontFamily: "Helvetica-Bold",
    color: C.cyan, letterSpacing: 1.2, marginRight: 10,
  },
  langCell:  { flexDirection: "row", alignItems: "center" },
  langPipe:  { width: 0.5, height: 9, backgroundColor: C.border, marginHorizontal: 8 },
  langName:  { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.dark },
  langLevel: { fontSize: 7, color: C.muted, marginLeft: 3 },
  langNote: {
    fontSize: 6, color: C.cyan, backgroundColor: C.cyanLight,
    paddingHorizontal: 3, paddingVertical: 1, borderRadius: 2, marginLeft: 5,
  },

  // ─────────────────────────────────────────────────────────────────────
  // BODY 1 — Experience (60%) | Skills + Certs + Hobbies (40%)
  // ─────────────────────────────────────────────────────────────────────
  body1: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
    flexShrink: 0,
  },

  colExp: {
    width: "60%",
    paddingLeft: 28,
    paddingRight: 18,
    paddingVertical: 18,
    borderRightWidth: 0.5,
    borderRightColor: C.border,
  },
  colSide: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 28,
    paddingVertical: 18,
  },

  // Section titles
  secTitle: {
    fontSize: 6, fontFamily: "Helvetica-Bold", color: C.cyan,
    letterSpacing: 1.5, marginBottom: 9, marginTop: 14,
  },
  secFirst: { marginTop: 0 },

  // Timeline
  tlItem:   { marginBottom: 12 },
  tlTop:    { flexDirection: "row", alignItems: "flex-start" },
  tlLogo:   { width: 32, height: 32, borderRadius: 6, marginRight: 10, marginTop: 1 },
  tlLogoBg: {
    width: 32, height: 32, borderRadius: 6, marginRight: 10, marginTop: 1,
    backgroundColor: C.bg, alignItems: "center", justifyContent: "center",
  },
  tlLogoInitials: { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.muted },
  tlBody:    { flex: 1 },
  tlHeadRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 2,
  },
  tlCompany: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.dark },
  tlPeriod:  { fontSize: 6.5, color: C.muted },
  tlRole:    { fontSize: 7.5, color: C.cyan, marginBottom: 3 },
  tlDesc:    { fontSize: 7, color: C.muted, lineHeight: 1.45 },

  // Skills
  skillGroup: { marginBottom: 6 },
  skillLabel: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  skillList:  { fontSize: 7, color: C.muted, lineHeight: 1.4 },

  // Certifications
  certRow:    { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  certName:   { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.dark },
  certIssuer: { fontSize: 6.5, color: C.muted, marginTop: 1 },
  certScore: {
    fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.cyan,
    backgroundColor: C.cyanLight, borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2,
  },

  // Hobbies
  hobbyItem:   { marginBottom: 6 },
  hobbyLabel:  { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  hobbyDetail: { fontSize: 7, color: C.muted, lineHeight: 1.4 },

  // ─────────────────────────────────────────────────────────────────────
  // BODY 2 — Projects (full width, 2×2 grid)
  // ─────────────────────────────────────────────────────────────────────
  body2: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 18,
  },

  projGrid: {
    flexDirection: "row",
    marginTop: 2,
  },
  projColLeft: {
    flex: 1,
    paddingRight: 18,
    borderRightWidth: 0.5,
    borderRightColor: C.border,
  },
  projColRight: {
    flex: 1,
    paddingLeft: 18,
  },

  projItem:   { marginBottom: 14 },
  projTop:    {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 2,
  },
  projName:   { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.dark },
  projBadges: { flexDirection: "row" },
  projBadge: {
    fontSize: 6, fontFamily: "Helvetica-Bold",
    paddingHorizontal: 5, paddingVertical: 2,
    borderRadius: 3, marginLeft: 4,
  },
  projStack: { fontSize: 7, color: C.cyan, marginBottom: 3 },
  projDesc:  { fontSize: 7, color: C.muted, lineHeight: 1.45 },
});

const trunc = (str: string, max: number) =>
  str.length > max ? str.slice(0, max).trimEnd() + "…" : str;

const PDF_SKILLS = SKILL_GROUPS.filter(g => g.label !== "IAs");

const LOGO_INITIALS: Partial<Record<string, string>> = {
  santo_inacio: "SI",
};

interface Props { t: Messages; photoUrl: string; baseUrl: string }

export default function CVDocument({ t, photoUrl, baseUrl }: Props) {
  const logos: Record<string, string | null> = {
    prognum:      `${baseUrl}/logos/Prognum.png`,
    uff:          `${baseUrl}/logos/uff.png`,
    santo_inacio: null,
    escola:       `${baseUrl}/logos/saobento.png`,
  };

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ══════════════════════════ HEADER ══════════════════════════ */}
        <View style={s.header}>
          <Image src={photoUrl} style={s.photo} />
          <View style={s.hRight}>
            <Text style={s.name}>{personal.name}</Text>
            <Text style={s.subtitle}>{t.hero.subtitle}</Text>
            <View style={s.contactRow}>
              <Text style={s.cText}>{personal.email}</Text>
              <Link src={personal.linkedin} style={s.cLink}>LinkedIn</Link>
              <Link src={personal.github}   style={s.cLink}>GitHub</Link>
            </View>
            <View style={s.badgeRow}>
              <Text style={s.badge}>BR  {t.hero.nationality}</Text>
              <Text style={s.badge}>{t.hero.age}</Text>
              <Text style={s.badge}>EU  {t.hero.citizenship}</Text>
            </View>
            <View style={s.langStrip}>
              <Text style={s.langStripLabel}>{t.sections.languages.toUpperCase()}</Text>
              {(["portuguese", "english", "spanish", "german"] as const).map((key, idx) => {
                const lang = t.langs[key];
                return (
                  <View key={key} style={s.langCell}>
                    {idx > 0 && <View style={s.langPipe} />}
                    <Text style={s.langName}>{lang.name}</Text>
                    <Text style={s.langLevel}> · {lang.level}</Text>
                    {lang.note ? <Text style={s.langNote}>{lang.note}</Text> : null}
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* ══════════ BODY 1 — Experience (60%) | Side (40%) ══════════ */}
        <View style={s.body1}>

          {/* Left 60% — Experience & Education */}
          <View style={s.colExp}>
            <Text style={[s.secTitle, s.secFirst]}>{t.sections.experience.toUpperCase()}</Text>
            {(["prognum", "uff", "santo_inacio", "escola"] as const).map(key => {
              const item  = t.timeline.items[key];
              const logo  = logos[key];
              const inits = LOGO_INITIALS[key] ?? companies[key].slice(0, 2).toUpperCase();
              return (
                <View key={key} style={s.tlItem} wrap={false}>
                  <View style={s.tlTop}>
                    {logo
                      ? <Image src={logo} style={s.tlLogo} />
                      : <View style={s.tlLogoBg}><Text style={s.tlLogoInitials}>{inits}</Text></View>
                    }
                    <View style={s.tlBody}>
                      <View style={s.tlHeadRow}>
                        <Text style={s.tlCompany}>{companies[key]}</Text>
                        <Text style={s.tlPeriod}>{item.period}</Text>
                      </View>
                      <Text style={s.tlRole}>{item.role}</Text>
                      <Text style={s.tlDesc}>{trunc(item.description, 200)}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          {/* Right 40% — Skills + Certifications + Hobbies */}
          <View style={s.colSide}>

            <Text style={[s.secTitle, s.secFirst]}>{t.sections.skills.toUpperCase()}</Text>
            {PDF_SKILLS.map(group => (
              <View key={group.label} style={s.skillGroup}>
                <Text style={s.skillLabel}>{group.label}</Text>
                <Text style={s.skillList}>{group.skills.map(sk => sk.name).join(", ")}</Text>
              </View>
            ))}

            <Text style={s.secTitle}>{t.sections.certifications.toUpperCase()}</Text>
            <View style={s.certRow}>
              <View>
                <Text style={s.certName}>{toefl.name}</Text>
                <Text style={s.certIssuer}>{toefl.issuer}</Text>
              </View>
              <Text style={s.certScore}>{toefl.score}</Text>
            </View>

            <Text style={s.secTitle}>{t.sections.hobbies.toUpperCase()}</Text>
            <View style={s.hobbyItem}>
              <Text style={s.hobbyLabel}>{t.hobbies.sport.label}</Text>
              <Text style={s.hobbyDetail}>{hobbyTags.sport.join(", ")}</Text>
            </View>
            <View style={s.hobbyItem}>
              <Text style={s.hobbyLabel}>{t.hobbies.music.label}</Text>
              <Text style={s.hobbyDetail}>{hobbyTags.music.join(", ")}</Text>
            </View>
            <View style={s.hobbyItem}>
              <Text style={s.hobbyLabel}>{t.hobbies.volunteer.label}</Text>
              <Text style={s.hobbyDetail}>{hobbyTags.volunteer[0]}</Text>
              <Text style={s.hobbyDetail}>{volunteerOrg} · Ipanema, RJ</Text>
            </View>

          </View>
        </View>

        {/* ══════════════════ BODY 2 — Projects (full width) ══════════ */}
        <View style={s.body2}>
          <Text style={[s.secTitle, s.secFirst]}>{t.sections.projects.toUpperCase()}</Text>

          <View style={s.projGrid}>

            {/* Projects left column */}
            <View style={s.projColLeft}>

              {/* HobbyMap */}
              <View style={s.projItem} wrap={false}>
                <View style={s.projTop}>
                  <Text style={s.projName}>HobbyMap</Text>
                  <View style={s.projBadges}>
                    <Text style={[s.projBadge, { color: C.green,  backgroundColor: C.greenBg  }]}>Live</Text>
                    <Text style={[s.projBadge, { color: C.orange, backgroundColor: C.orangeBg }]}>
                      {t.projects.builtWith} {hobbymap.builtWith}
                    </Text>
                  </View>
                </View>
                <Text style={s.projStack}>{hobbymap.stack.join(" · ")}</Text>
                <Text style={s.projDesc}>{trunc(t.projects.hobbymap.description, 260)}</Text>
              </View>

              {/* Sonho dos Pés */}
              <View style={s.projItem} wrap={false}>
                <View style={s.projTop}>
                  <Text style={s.projName}>Sonho dos Pés</Text>
                  <Text style={[s.projBadge, { color: C.muted, backgroundColor: C.bg }]}>
                    {t.projects.personal}
                  </Text>
                </View>
                <Text style={s.projStack}>{sonho.stack.join(" · ")}</Text>
                <Text style={s.projDesc}>{trunc(t.projects.sonho.description, 260)}</Text>
              </View>

            </View>

            {/* Projects right column */}
            <View style={s.projColRight}>

              {/* Prognum */}
              <View style={s.projItem} wrap={false}>
                <View style={s.projTop}>
                  <Text style={s.projName}>Prognum</Text>
                  <Text style={[s.projBadge, { color: C.muted, backgroundColor: C.bg }]}>
                    {t.projects.professional}
                  </Text>
                </View>
                <Text style={s.projStack}>{prognum.stack.join(" · ")}</Text>
                <Text style={s.projDesc}>{trunc(t.projects.prognum.description, 260)}</Text>
              </View>

              {/* GitHub */}
              <View style={s.projItem} wrap={false}>
                <View style={s.projTop}>
                  <Text style={s.projName}>GitHub</Text>
                  <Link
                    src={personal.github}
                    style={[s.projBadge, { color: C.cyan, backgroundColor: C.cyanLight }]}
                  >
                    github.com/FelipeVilelaFreire
                  </Link>
                </View>
                <Text style={s.projDesc}>{trunc(t.projects.github.description, 220)}</Text>
              </View>

            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
}
