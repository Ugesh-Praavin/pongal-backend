import { FinanceLevel } from 'src/common/enum/finance.enum';

export const FINANCE_TIPS: Record<
  FinanceLevel,
  {
    title: string;
    advice: string[];
  }
> = {
  LOW: {
    title: 'Build the Habit First',
    advice: [
      'Track expenses for one month',
      'Aim to save at least ₹500/month',
      'Avoid unnecessary online purchases',
      'Emergency fund is more important than investing',
    ],
  },

  MEDIUM: {
    title: 'Strengthen Your Savings',
    advice: [
      'Save at least 20–30% consistently',
      'Start a small Recurring Deposit (RD)',
      'Build 3 months of emergency fund',
    ],
  },

  HIGH: {
    title: 'Prepare for Investing',
    advice: [
      'Split money: 60% save, 40% invest (conceptually)',
      'Learn basics of SIPs & mutual funds',
      'Avoid lifestyle inflation',
    ],
  },

  VERY_HIGH: {
    title: 'Think Long-Term',
    advice: [
      'Define financial goals (5–10 years)',
      'Learn tax-saving instruments',
      'Diversify instead of putting money in one place',
    ],
  },
};
