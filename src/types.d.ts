type IncomePeriod = {
    label: string,
    value: string,
}

type TaxThreshold = {
    min: number,
    max: number,
    rate: number
}

type PanelTab = {
    label: string,
    key: string,
}

type FrequencyItem = {
    name: string,
    key: string,
    calcToYear: number
}

type PieChartitem = {
    label: string,
    calcFromYear: number
}

type SavingGoalItem = {
    name: string,
    amount: number,
    savedAmount: number,
    date: Date,
    isReached: boolean,
    transactions: TransactionItem[]
}

type TransactionItem = {
    amount: number,
    date: Date,
    totalSaved: number,
}

type InvestmentItem = {
    name: string,
    amount: number,
    rate: number,
    term: number,
    taxRate: number,
    startDate: Date,
    termPeriod: TermPeriod
}

type TermPeriod = {
    name: string,
    label: string,
}

type RowIndicator = {
    label: string,
    key: string,
    value: number,
    isHidden: boolean,
    isSimple: boolean,
    hideWhenEmpty: boolean,
};

type PieChartItem = {
    value: number,
    color: string,
    text: string,
}

type IncomeTableHeader = {
    label: string,
    calcToYear: number,
}