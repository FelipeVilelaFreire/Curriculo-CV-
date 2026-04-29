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

  // ── Header ─────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 26,
    paddingTop: 22,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },
  photo:    { width: 64, height: 64, borderRadius: 32, marginRight: 18, marginTop: 2 },
  hRight:   { flex: 1 },
  name:     { fontSize: 20, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  subtitle: { fontSize: 7.5, color: C.muted, marginBottom: 6 },
  contactRow: { flexDirection: "row", marginBottom: 5 },
  cText: { fontSize: 6.5, color: C.muted, marginRight: 14 },
  cLink: { fontSize: 6.5, color: C.cyan,  marginRight: 14 },
  badgeRow: { flexDirection: "row", marginBottom: 9 },
  badge: {
    fontSize: 6, fontFamily: "Helvetica-Bold", color: C.muted,
    backgroundColor: C.bg, borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2, marginRight: 5,
  },

  // Languages strip — inline row below badges, inside header
  langStrip: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.3,
    borderTopColor: C.border,
    paddingTop: 7,
  },
  langStripLabel: {
    fontSize: 5, fontFamily: "Helvetica-Bold",
    color: C.cyan, letterSpacing: 1.2, marginRight: 9,
  },
  langCell:  { flexDirection: "row", alignItems: "center" },
  langPipe:  { width: 0.5, height: 9, backgroundColor: C.border, marginHorizontal: 7 },
  langName:  { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.dark },
  langLevel: { fontSize: 6.5, color: C.muted, marginLeft: 3 },
  langNote: {
    fontSize: 5.5, color: C.cyan,
    backgroundColor: C.cyanLight,
    paddingHorizontal: 3, paddingVertical: 1,
    borderRadius: 2, marginLeft: 5,
  },

  // ── Body ────────────────────────────────────────────────────────────
  body: { flexDirection: "row", flex: 1 },

  // Left column
  colLeft: {
    width: "49%",
    paddingLeft: 26,
    paddingRight: 14,
    paddingTop: 14,
    paddingBottom: 16,
    borderRightWidth: 0.5,
    borderRightColor: C.border,
  },

  // Right column
  colRight: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 26,
    paddingTop: 14,
    paddingBottom: 16,
  },

  // ── Section titles ──────────────────────────────────────────────────
  secTitle: {
    fontSize: 5.5, fontFamily: "Helvetica-Bold", color: C.cyan,
    letterSpacing: 1.5, marginBottom: 7, marginTop: 13,
  },
  secFirst: { marginTop: 0 },

  // ── Timeline ────────────────────────────────────────────────────────
  tlItem:   { marginBottom: 10 },
  tlTop:    { flexDirection: "row", alignItems: "flex-start" },
  tlLogo:   { width: 30, height: 30, borderRadius: 5, marginRight: 9, marginTop: 1 },
  tlLogoBg: {
    width: 30, height: 30, borderRadius: 5, marginRight: 9, marginTop: 1,
    backgroundColor: C.bg, alignItems: "center", justifyContent: "center",
  },
  tlLogoInitials: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.muted },
  tlBody:    { flex: 1 },
  tlHeadRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 2,
  },
  tlCompany: { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.dark },
  tlPeriod:  { fontSize: 6, color: C.muted },
  tlRole:    { fontSize: 7, color: C.cyan, marginBottom: 2 },
  tlDesc:    { fontSize: 6.5, color: C.muted, lineHeight: 1.4 },

  // ── Hobbies ─────────────────────────────────────────────────────────
  hobbyItem:   { marginBottom: 5 },
  hobbyLabel:  { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 1.5 },
  hobbyDetail: { fontSize: 6.5, color: C.muted, lineHeight: 1.35 },

  // ── Skills ──────────────────────────────────────────────────────────
  skillGroup: { marginBottom: 5 },
  skillLabel: { fontSize: 6.5, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 1.5 },
  skillList:  { fontSize: 6.5, color: C.muted, lineHeight: 1.4 },

  // ── Certifications ──────────────────────────────────────────────────
  certRow:    { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  certName:   { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.dark },
  certIssuer: { fontSize: 6, color: C.muted, marginTop: 1 },
  certScore: {
    fontSize: 7, fontFamily: "Helvetica-Bold", color: C.cyan,
    backgroundColor: C.cyanLight, borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2,
  },

  // ── Projects ────────────────────────────────────────────────────────
  projItem:   { marginBottom: 7 },
  projTop:    {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 1.5,
  },
  projName:   { fontSize: 8, fontFamily: "Helvetica-Bold", color: C.dark },
  projBadges: { flexDirection: "row" },
  projBadge: {
    fontSize: 5.5, fontFamily: "Helvetica-Bold",
    paddingHorizontal: 4, paddingVertical: 1.5,
    borderRadius: 3, marginLeft: 3,
  },
  projStack: { fontSize: 6.5, color: C.cyan, marginBottom: 2 },
  projDesc:  { fontSize: 6.5, color: C.muted, lineHeight: 1.4 },
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

        {/* ── Header ── */}
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

            {/* Languages inline row */}
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

        {/* ── Body ── */}
        <View style={s.body}>

          {/* LEFT — Experience & Education + Hobbies */}
          <View style={s.colLeft}>

            <Text style={[s.secTitle, s.secFirst]}>{t.sections.experience.toUpperCase()}</Text>

            {(["prognum", "uff", "santo_inacio", "escola"] as const).map(key => {
              const item = t.timeline.items[key];
              const logoUrl = logos[key];
              const initials = LOGO_INITIALS[key] ?? companies[key].slice(0, 2).toUpperCase();
              return (
                <View key={key} style={s.tlItem} wrap={false}>
                  <View style={s.tlTop}>
                    {logoUrl
                      ? <Image src={logoUrl} style={s.tlLogo} />
                      : (
                        <View style={s.tlLogoBg}>
                          <Text style={s.tlLogoInitials}>{initials}</Text>
                        </View>
                      )
                    }
                    <View style={s.tlBody}>
                      <View style={s.tlHeadRow}>
                        <Text style={s.tlCompany}>{companies[key]}</Text>
                        <Text style={s.tlPeriod}>{item.period}</Text>
                      </View>
                      <Text style={s.tlRole}>{item.role}</Text>
                      <Text style={s.tlDesc}>{trunc(item.description, 175)}</Text>
                    </View>
                  </View>
                </View>
              );
            })}

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

          {/* RIGHT — Skills + Certifications + Projects */}
          <View style={s.colRight}>

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

            <Text style={s.secTitle}>{t.sections.projects.toUpperCase()}</Text>

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
              <Text style={s.projDesc}>{trunc(t.projects.hobbymap.description, 200)}</Text>
            </View>

            <View style={s.projItem} wrap={false}>
              <View style={s.projTop}>
                <Text style={s.projName}>Prognum</Text>
                <Text style={[s.projBadge, { color: C.muted, backgroundColor: C.bg }]}>
                  {t.projects.professional}
                </Text>
              </View>
              <Text style={s.projStack}>{prognum.stack.join(" · ")}</Text>
              <Text style={s.projDesc}>{trunc(t.projects.prognum.description, 190)}</Text>
            </View>

            <View style={s.projItem} wrap={false}>
              <View style={s.projTop}>
                <Text style={s.projName}>Sonho dos Pés</Text>
                <Text style={[s.projBadge, { color: C.muted, backgroundColor: C.bg }]}>
                  {t.projects.personal}
                </Text>
              </View>
              <Text style={s.projStack}>{sonho.stack.join(" · ")}</Text>
              <Text style={s.projDesc}>{trunc(t.projects.sonho.description, 190)}</Text>
            </View>

            <View style={s.projItem} wrap={false}>
              <View style={s.projTop}>
                <Text style={s.projName}>GitHub</Text>
              </View>
              <Text style={s.projDesc}>{trunc(t.projects.github.description, 160)}</Text>
            </View>

          </View>

        </View>
      </Page>
    </Document>
  );
}
